import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const testApi = createApi({
	reducerPath: 'testApi',
	baseQuery: fetchBaseQuery({baseUrl: "https://flowerista.onrender.com/api"}),
	endpoints: (build) => ({
		testFetch: build.query<any,any>({
			query: () => ({
				url: `/bouquete/bs`,
			}),
		}),
	})
})

export const { useTestFetchQuery } = testApi;
