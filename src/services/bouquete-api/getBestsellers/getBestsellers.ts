import { rtkApi } from '../../../http/rtkApi';
import { IFlowerCard } from '../../../interface/flower';

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
