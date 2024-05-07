import {rtkApi} from '../../../http/rtkApi';

const checkPhone = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getCheckPhone: build.query<string, any>({
			query: (phone) => ({
				url: `/auth/checkPhone/${phone}`,
			}),
		}),
	}),
});


export const useLazyGetCheckPhoneQuery = checkPhone.useLazyGetCheckPhoneQuery;
