import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_API_URL}/api`,
	}),
	endpoints: () => ({}),
});


// export const rtkApiAuth = createApi({
// 	reducerPath: 'api',
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: process.env.REACT_APP_API_URL,
// 		prepareHeaders: (headers) => {
// 			const token = localStorage.getItem() || '';
// 			if (token) {
// 				headers.set('Authorization', token);
// 			}
// 			return headers;
// 		},
// 	}),
// 	endpoints: () => ({}),
// });
