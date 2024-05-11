import { rtkApi } from '../../../shared/api/rtkApi.ts';
import { IBouquetId } from '../../../shared/types/flower.ts';

const getBouqueteByIdApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBouqueteById: build.query<IBouquetId, string>({
      query: (id) => ({
        url: `/bouquete/${id}`
      })
    })
  })
});

export const useGetBouqueteById = getBouqueteByIdApi.useGetBouqueteByIdQuery;
