import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IAllFlower, IBouquetId, IFetchAllFlowers, IFlower, IFlowerCard} from '../../interface/flower';
import { IRegister } from '../../interface/register';

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
		getRangePrice: build.query<{minPrice:number,maxPrice:number},any>({
			query: () => ({
				url: `/bouquete/price-range`,
			}),
		}),
		getAllFlowers: build.query<IAllFlower,IFetchAllFlowers>({
			query: (data) => ({
				url: `/bouquete?page=${data.page}
							${data.flowerIds?.length === 0 ?"":`&flowerIds=${data.flowerIds}`}
							${data.colorIds?.length === 0 ?"":`&colorIds=${data.colorIds}`}
							${data.minPrice && data.minPrice > data.min ?`&minPrice=${data.minPrice}`:''}
							${data.maxPrice && data.maxPrice < data.max ?`&maxPrice=${data.maxPrice}`:''}
							${data.sortByNewest ?`&sortByNewest=${data.sortByNewest}`:""}
							${data.sortByPriceHighToLow ?`&sortByPriceHighToLow=${data.sortByPriceHighToLow}`:""}
							${data.sortByPriceLowToHigh ?`&sortByPriceLowToHigh=${data.sortByPriceLowToHigh}`:""}
							`
				,
			}),
		}),
		getCheckEmail: build.query<boolean, string>({
			query: (email) => ({
				url: `/auth/checkEmail/`,
				params: {
					email
				}
			})
		}),
		getCheckPhone: build.query<boolean, number>({
			query: (phone) => ({
				url: `/auth/checkPhone/`,
				params: {
					phone
				}
			})
		}),
		postRegistration: build.mutation<{}, IRegister>({
			query: (data) => ({
				url: `/auth/register`,
				method: 'POST',
				body: data
			})
		}),
		getBouqueteById: build.query<IBouquetId,string>({
			query: (id) => ({
				url: `/bouquete/${id}`,
			}),
		}),
	})
})

export const { 
	useGetBestsellersQuery,
	useGetTopSellersQuery, 
	useGetAllFlowersQuery,
	useGetColorsQuery,
	useGetFlowersQuery,
	useGetRangePriceQuery,
	useGetBouqueteByIdQuery,
  useGetCheckEmailQuery,
	useGetCheckPhoneQuery,
	usePostRegistrationMutation
} = bouqueteApi;
