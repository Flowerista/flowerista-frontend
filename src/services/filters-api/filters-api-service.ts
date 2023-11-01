import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';


interface IFlower{
	id: number;
	name: string
}



export const filtersApi = createApi({
	reducerPath: 'filtersApi',
	baseQuery: fetchBaseQuery({baseUrl: `https://flowerista.onrender.com/api`,
	}),

	endpoints: (build) => ({
		getColors: build.query<IFlower[],any>({
			query: () => ({
				url: `/color`
			}),
		}),
		getFlowers: build.query<IFlower[],any>({
			query: () => ({
				url: `/flower`,
			}),
		}),
		getBouquete: build.query<any,any>({
			query: (filters) => ({
				url: `/bouquete
				${filters.flowersIdS ? `?flowerIds=${filters.flowersIdS}`:""}`
			}),
		}),
	})
})


export const {useGetColorsQuery,useGetFlowersQuery,useGetBouqueteQuery } = filtersApi;
