import {rtkApi} from '../../../http/rtkApi';
import {IFlower} from '../../../interface/flower';

const getColorsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getColors: build.query<IFlower[], any>({
			query: () => ({
				url: '/color',
			}),
		}),
	}),
});


export const useGetColors = getColorsApi.useGetColorsQuery;
