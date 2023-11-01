import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IFlowerCard, IAllFlower, IFetchAllFlowers } from '../../interface/flower';

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
		getAllFlowers: build.query<IAllFlower,IFetchAllFlowers>({
			query: (data) => ({
				url: `/bouquete`,
				params: {
					// Remove underlining where necessary
					_flowerIds: data.flowerIds, 
					_colorIds: data.colorIds,
					_minPrice: data.minPrice,
					_maxPrice: data.maxPrice,
					_sortByNewest: data.sortByNewest,
					_sortByPriceHighToLow: data.sortByPriceHighToLow,
					_sortByPriceLowToHigh: data.sortByPriceLowToHigh,
					page: data.page
				}
			}),
		}),
	})
})

export const { useGetBestsellersQuery,useGetTopSellersQuery, useGetAllFlowersQuery } = bouqueteApi;
