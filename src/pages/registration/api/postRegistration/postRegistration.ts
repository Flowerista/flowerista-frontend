import { rtkApi } from '../../../../shared/api/rtkApi.ts';
import { RegisterInterface } from '../../types/registerInterface.ts';

const postRegistrationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    postRegistration: build.mutation<void, RegisterInterface>({
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
