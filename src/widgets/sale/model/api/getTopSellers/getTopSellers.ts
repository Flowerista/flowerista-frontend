import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { InterfaceFlowerCard } from '../../../../../features/card/model/types/InterfaceFlowerCard.ts';

const getTopSellersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getTopSellers: build.query<InterfaceFlowerCard[], void>({
      query: () => ({
        url: `/bouquete/ts`
      })
    })
  })
});

export const useGetTopSellers = getTopSellersApi.useGetTopSellersQuery;
