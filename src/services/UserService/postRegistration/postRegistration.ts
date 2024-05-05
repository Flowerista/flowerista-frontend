import { rtkApi } from '../../../http/rtkApi';
import { IRegister } from '../../../interface/register';

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
