import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const authServiceApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_API_URL}/api`}),
	endpoints: (build) => ({
		resetPassword: build.mutation<string, string>({
			query: (data) => ({
				url: `/auth/resetPassword`,
				method: 'POST',
				params: {
					email: data,
				},
			}),
		}),
		subscription: build.mutation<any, any>({
			query: (data) => ({
				url: `/subscription`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const {
	useSubscriptionMutation,
	useResetPasswordMutation,
} = authServiceApi;
