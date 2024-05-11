import { rtkApi } from '../../../shared/api/rtkApi.ts';
import { IFlowerCard } from '../../../shared/types/flower.ts';

const getBestsellersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBestsellers: build.query<IFlowerCard[], void>({
      query: () => ({
        url: `/bouquete/bs`
      })
    })
  })
});

export const useGetBestsellers = getBestsellersApi.useGetBestsellersQuery;
