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
  console.log(result);
  if (result?.error?.status === 401) {
    console.log('Sending refresh token');
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh-token',
        method: 'POST',
        credentials: 'include',
        mode: 'cors'
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const refreshData = refreshResult.data as {
        access_token: string;
      };
      Cookies.set('token', refreshData.access_token, {
        path: '/',
        domain: 'https://floverista-011daa2eb6c3.herokuapp.com'
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
