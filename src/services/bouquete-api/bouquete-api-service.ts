import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IFlowerCard} from '../../interface/flower';


export const bouqueteApi = createApi({
	reducerPath: 'bouqueteApi',
	baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_API_URL}/api`}),
	endpoints: (build) => ({
		getBestsellers: build.query<IFlowerCard[],any>({
			query: () => ({
				url: `/bouquete/bs`,
			}),
		}),
		getTopSellers: build.query<IFlowerCard[],any>({
			query: () => ({
				url: `/bouquete/ts`,
			}),
		}),
	})
})

export const { useGetBestsellersQuery,useGetTopSellersQuery } = bouqueteApi;
