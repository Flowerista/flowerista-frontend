import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { AddressInterface } from '../../types/addressInterface.ts';

const changeAddressApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    changeAddress: build.mutation<void, AddressInterface>({
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
