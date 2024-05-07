import {IChangePassword} from '../../../interface/global';
import {rtkApiAuth} from '../../../http/rtkApAuthi';

const changePasswordApi = rtkApiAuth.injectEndpoints({
	endpoints: (build) => ({
		changePassword: build.mutation<void, IChangePassword>({
			query: (passwords) => ({
				url: `/user/changePassword`,
				method: 'PATCH',
				body: passwords,
			}),
		}),
	}),
});


export const useChangePassword = changePasswordApi.useChangePasswordMutation;
