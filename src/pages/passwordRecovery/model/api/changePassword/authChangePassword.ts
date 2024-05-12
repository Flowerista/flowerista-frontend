import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { InterfaceChangePassword } from '../../types/InterfaceChangePassword.ts';

const authChangePasswordApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    authChangePassword: build.mutation<void, InterfaceChangePassword>({
      query: ({ password, passwordRepeated, token }) => ({
        url: `/auth/changePassword`,
        method: 'POST',
        body: password,
        passwordRepeated,
        token
      })
    })
  })
});

export const useAuthChangePassword =
  authChangePasswordApi.useAuthChangePasswordMutation;
