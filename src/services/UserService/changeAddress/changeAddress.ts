import {IAddress} from '../../../interface/global';
import {rtkApiAuth} from '../../../http/rtkApAuthi';

const changeAddressApi = rtkApiAuth.injectEndpoints({
	endpoints: (build) => ({
		changeAddress: build.mutation<void, IAddress>({
			query: (address) => ({
				url: `/user/changeAddress`,
				method: 'PATCH',
				body: address,
			}),
		}),
	}),
});


export const useChangeAddress = changeAddressApi.useChangeAddressMutation;
