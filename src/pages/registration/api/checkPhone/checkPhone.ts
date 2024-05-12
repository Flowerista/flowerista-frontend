import { rtkApi } from '../../../../shared/api/rtkApi.ts';

const checkPhone = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCheckPhone: build.query<boolean, string>({
      query: (phone) => ({
        url: `/auth/checkPhone/${phone}`
      })
    })
  })
});

export const useLazyGetCheckPhoneQuery = checkPhone.useLazyGetCheckPhoneQuery;
