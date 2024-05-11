import { rtkApi } from '../../../shared/api/rtkApi.ts';
import { AuthResponse } from '../../../shared/types/AuthResponse.ts';

const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: `/auth/authenticate`,
        method: 'POST',
        body: {
          email,
          password
        }
      })
    })
  })
});

export const useLoginMutation = loginApi.useLoginMutation;
