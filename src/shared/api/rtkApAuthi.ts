import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';
import { logoutAll } from '../../pages/profile/model/slice/profile/profile.slice.ts';
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

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log('Sending refresh token');
    const refreshResult = await baseQuery(
      {
        url: '/refresh-token',
        method: 'POST',
        body: JSON.stringify({ refreshToken: Cookies.get('refreshToken') })
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const refreshData = refreshResult.data as {
        access_token: string;
      };
      Cookies.set('token', refreshData.access_token, {
        sameSite: 'Strict',
        secure: true
      });
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutAll());
      console.log('Not authorized');
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
