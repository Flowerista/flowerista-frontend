import {rtkApi} from '../../../http/rtkApi';
import {IFlowerCard} from '../../../interface/flower';

const getTopSellersApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getTopSellers: build.query<IFlowerCard[], any>({
			query: () => ({
				url: `/bouquete/ts`,
			}),
		}),
	}),
});


export const useGetTopSellers = getTopSellersApi.useGetTopSellersQuery;
