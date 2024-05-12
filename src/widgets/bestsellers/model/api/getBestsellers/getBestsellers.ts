import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { InterfaceFlowerCard } from '../../../../../features/card/model/types/InterfaceFlowerCard.ts';

const getBestsellersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBestsellers: build.query<InterfaceFlowerCard[], void>({
      query: () => ({
        url: `/bouquete/bs`
      })
    })
  })
});

export const useGetBestsellers = getBestsellersApi.useGetBestsellersQuery;
