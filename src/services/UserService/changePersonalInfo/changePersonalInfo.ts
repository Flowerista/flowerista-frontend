import { IPersonalInfo } from '../../../shared/types/global.ts';
import { rtkApiAuth } from '../../../shared/api/rtkApAuthi.ts';

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
