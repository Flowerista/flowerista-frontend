import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { IUser } from '../../../../login/model/types/AuthResponseInterface.ts';

const getProfileApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IUser, void>({
      query: () => ({
        url: `/user/profile`
      }),
      providesTags: ['User']
    })
  })
});

export const useGetProfile = getProfileApi.useGetProfileQuery;
