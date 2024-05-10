import { IPersonalInfo } from '../../../interface/global';
import { rtkApiAuth } from '../../../http/rtkApAuthi';

const changePersonalInformationApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    changePersonalInfo: build.mutation<void, IPersonalInfo>({
      query: (personalInfo) => ({
        url: `/user/changePersonalInfo`,
        method: 'PATCH',
        body: personalInfo
      }),
      invalidatesTags: ['User']
    })
  })
});

export const useChangePersonalInformation =
  changePersonalInformationApi.useChangePersonalInfoMutation;
