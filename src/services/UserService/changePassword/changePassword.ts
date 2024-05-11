import { IChangePassword } from '../../../shared/types/global.ts';
import { rtkApiAuth } from '../../../shared/api/rtkApAuthi.ts';

const changePasswordApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation<void, IChangePassword>({
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
