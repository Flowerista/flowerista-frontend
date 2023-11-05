import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IAllFlower, IFetchAllFlowers, IFlower, IFlowerCard} from '../../interface/flower';

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
		getAllFlowers: build.query<IAllFlower,IFetchAllFlowers>({
			query: (data) => ({
				url: `/bouquete?page=${data.page}
							${data.flowerIds?.length === 0 ?"":`&flowerIds=${data.flowerIds}`}
							${data.colorIds?.length === 0 ?"":`&colorIds=${data.colorIds}`}
							${data.minPrice && data.minPrice > 0 ?`&minPrice=${data.minPrice}`:''}
							${data.maxPrice && data.maxPrice < 9999 ?`&maxPrice=${data.maxPrice}`:''}
							${data.sortByNewest ?`&sortByNewest=${data.sortByNewest}`:""}
							${data.sortByPriceHighToLow ?`&sortByPriceHighToLow=${data.sortByPriceHighToLow}`:""}
							${data.sortByPriceLowToHigh ?`&sortByPriceLowToHigh=${data.sortByPriceLowToHigh}`:""}
							`
				,
			}),
		}),
	})
})

export const { useGetBestsellersQuery
	,useGetTopSellersQuery
	, useGetAllFlowersQuery,
	useGetColorsQuery,
	useGetFlowersQuery
} = bouqueteApi;
