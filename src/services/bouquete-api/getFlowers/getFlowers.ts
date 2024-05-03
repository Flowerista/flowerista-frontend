import {rtkApi} from '../../../http/rtkApi';
import {IFlower} from '../../../interface/flower';

const getFlowersApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getFlowers: build.query<IFlower[], any>({
			query: () => ({
				url: `/flower`,
			}),
		}),
	}),
});


export const useGetFlowers = getFlowersApi.useGetFlowersQuery;
