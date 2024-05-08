import { rtkApiAuth } from '../../../http/rtkApAuthi';

interface IChangePassword {
  passwordRepeated: string;
  password: string;
  token: string;
}

const authChangePasswordApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    authChangePassword: build.mutation<void, IChangePassword>({
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
