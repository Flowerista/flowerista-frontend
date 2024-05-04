import {rtkApi} from '../../../http/rtkApi';

const checkEmail = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getCheckEmail: build.query<string, any>({
			query: (email) => ({
				url: `/auth/checkEmail/${email}`,
			}),
		}),
	}),
});


export const useLazyGetCheckEmailQuery = checkEmail.useLazyGetCheckEmailQuery;
