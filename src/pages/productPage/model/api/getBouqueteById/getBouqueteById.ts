import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { InterfaceBouquetId } from '../../types/interfaceBouquetId.ts';

const getBouqueteByIdApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBouqueteById: build.query<InterfaceBouquetId, string>({
      query: (id) => ({
        url: `/bouquete/${id}`
      })
    })
  })
});

export const useGetBouqueteById = getBouqueteByIdApi.useGetBouqueteByIdQuery;
