import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { ISearchBouquet } from '../../../../../shared/types/flower.ts';

const searchBouquetesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    searchBouquetes: build.query<ISearchBouquet[], string>({
      query: (searchTerm) => ({
        url: `/bouquete/search?name=${searchTerm !== '' ? searchTerm : ''}`
      })
    })
  })
});

export const useSearchBouquetes = searchBouquetesApi.useSearchBouquetesQuery;
