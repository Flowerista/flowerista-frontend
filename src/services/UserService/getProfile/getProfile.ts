import { IUser } from '../../../interface/global';
import { rtkApiAuth } from '../../../http/rtkApAuthi';

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
