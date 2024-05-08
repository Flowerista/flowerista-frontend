import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';

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

  // if (result?.error?.originalStatus === 403) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (result?.error?.originalStatus === 401) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refreshResult: any = await baseQuery('/refresh-token', api, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('refresh')}`
      }
    });

    console.log(refreshResult);

    if (refreshResult?.data) {
      localStorage.setItem('token', refreshResult.data.refresh_token);
      localStorage.setItem('refresh', refreshResult.data.refresh_token);
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logOut())
      console.log('Not authorized');
    }
  }

  return result;
};

export const rtkApiAuth = createApi({
  reducerPath: 'api/auth',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
