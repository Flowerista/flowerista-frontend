import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';


interface IFlower{
	id: number;
	name: string;
}

export const filtersApi = createApi({
	reducerPath: 'filtersApi',
	baseQuery: fetchBaseQuery({baseUrl: `https://flowerista.onrender.com/api`,
		mode:"cors",
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	}),

	endpoints: (build) => ({
		getColors: build.query<any,any>({
			query: () => ({
				url: `/color`,
			}),
		}),
		getFlowers: build.query<IFlower[],any>({
			query: () => ({
				url: `/flower`,
			}),
		}),
	})
})

export const {useGetColorsQuery,useGetFlowersQuery } = filtersApi;
