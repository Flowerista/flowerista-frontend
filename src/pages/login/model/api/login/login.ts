import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { AuthResponseInterface } from '../../types/AuthResponseInterface.ts';

const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<
      AuthResponseInterface,
      { email: string; password: string }
    >({
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
