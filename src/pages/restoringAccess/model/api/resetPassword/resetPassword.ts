import { rtkApi } from '../../../../../shared/api/rtkApi.ts';

const resetPassword = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    resetPassword: build.mutation<string, string>({
      query: (data) => ({
        url: `/auth/resetPassword`,
        method: 'POST',
        params: {
          email: data
        }
      })
    })
  })
});

export const useResetPasswordMutation = resetPassword.useResetPasswordMutation;
