import {rtkApi} from '../../../http/rtkApi';
import {IBouquetId} from '../../../interface/flower';

const getBouqueteByIdApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getBouqueteById: build.query<IBouquetId, string>({
			query: (id) => ({
				url: `/bouquete/${id}`,
			}),
		}),
	}),
});


export const useGetBouqueteById = getBouqueteByIdApi.useGetBouqueteByIdQuery;
