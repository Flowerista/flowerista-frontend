import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';
import { logoutAll } from '../../store/profile/profile.slice.ts';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  // включити коли на бекенді добавлять можливіть отримувати токени через cookie
  // credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // originalStatus or status depends on your api
  if (result?.error?.status === 401) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/refresh-token', api, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('refresh')}`
      }
    });

    if (refreshResult?.data) {
      const refreshData = refreshResult.data as {
        refresh_token: string;
        access_token: string;
      };
      localStorage.setItem('token', refreshData.access_token);
      localStorage.setItem('refresh', refreshData.refresh_token);
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutAll());
      console.log('Not authorized');
    }
  }

  return result;
};

export const rtkApiAuth = createApi({
  reducerPath: 'api/auth',
  tagTypes: ['User'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
