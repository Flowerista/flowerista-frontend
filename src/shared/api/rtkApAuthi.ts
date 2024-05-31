import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';
import { logoutAll } from '../../pages/profile/model/slice/profile/profile.slice.ts';
import { Mutex } from 'async-mutex';
import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = Cookies.get('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

// create a new mutex
const mutex = new Mutex();
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            url: '/auth/refresh-token',
            method: 'POST'
          },
          api,
          extraOptions
        );
        if (refreshResult.meta?.response?.status === 200) {
          const refreshData = refreshResult.data as {
            access_token: string;
          };
          Cookies.set('token', refreshData.access_token);
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logoutAll());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const rtkApiAuth = createApi({
  reducerPath: 'rtkApiAuth',
  tagTypes: ['User'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
