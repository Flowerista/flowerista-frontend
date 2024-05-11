import { IAddress } from '../../../shared/types/global.ts';
import { rtkApiAuth } from '../../../shared/api/rtkApAuthi.ts';

const changeAddressApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    changeAddress: build.mutation<void, IAddress>({
      query: (address) => ({
        url: `/user/changeAddress`,
        method: 'PATCH',
        body: address
      }),
      invalidatesTags: ['User']
    })
  })
});

export const useChangeAddress = changeAddressApi.useChangeAddressMutation;
