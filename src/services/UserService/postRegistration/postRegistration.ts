import { rtkApi } from '../../../shared/api/rtkApi.ts';
import { IRegister } from '../../../shared/types/register.ts';

const postRegistrationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    postRegistration: build.mutation<void, IRegister>({
      query: (data) => ({
        url: `/auth/register`,
        method: 'POST',
        body: data
      })
    })
  })
});

export const usePostRegistration =
  postRegistrationApi.usePostRegistrationMutation;
