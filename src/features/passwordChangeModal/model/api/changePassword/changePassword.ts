import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { InterfaceChangePassword } from '../../types/InterfaceChangePassword.ts';

const changePasswordApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation<void, InterfaceChangePassword>({
      query: (passwords) => ({
        url: `/user/changePassword`,
        method: 'PATCH',
        body: passwords
      }),
      invalidatesTags: ['User']
    })
  })
});

export const useChangePassword = changePasswordApi.useChangePasswordMutation;
