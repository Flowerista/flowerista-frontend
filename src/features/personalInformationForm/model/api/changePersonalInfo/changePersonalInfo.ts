import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { ChangePersonalInfoInterface } from '../../types/changePersonalInfoInterface.ts';

const changePersonalInformationApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    changePersonalInfo: build.mutation<void, ChangePersonalInfoInterface>({
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
