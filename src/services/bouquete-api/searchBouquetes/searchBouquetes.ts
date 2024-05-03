import {rtkApi} from '../../../http/rtkApi';
import {ISearchBouquet} from '../../../interface/flower';

const searchBouquetesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		searchBouquetes: build.query<ISearchBouquet[], string>({
			query: (searchTerm) => ({
				url: `/bouquete/search?name=${searchTerm !== '' ? searchTerm : ''}`,
			}),
		}),
	}),
});


export const useSearchBouquetes = searchBouquetesApi.useSearchBouquetesQuery;
