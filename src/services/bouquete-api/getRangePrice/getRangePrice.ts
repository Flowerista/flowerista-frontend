import { rtkApi } from '../../../http/rtkApi';

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
