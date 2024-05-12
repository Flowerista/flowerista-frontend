import { rtkApi } from '../../../../../shared/api/rtkApi.ts';

const getRangePriceApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRangePrice: build.query<{ minPrice: number; maxPrice: number }, void>({
      query: () => ({
        url: `/bouquete/price-range`
      })
    })
  })
});

export const useGetRangePrice = getRangePriceApi.useGetRangePriceQuery;
