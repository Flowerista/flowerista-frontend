import { rtkApi } from '../../../shared/api/rtkApi.ts';
import { IFlowerCard } from '../../../shared/types/flower.ts';

const getTopSellersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getTopSellers: build.query<IFlowerCard[], void>({
      query: () => ({
        url: `/bouquete/ts`
      })
    })
  })
});

export const useGetTopSellers = getTopSellersApi.useGetTopSellersQuery;
