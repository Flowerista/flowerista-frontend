import { rtkApi } from '../../../../shared/api/rtkApi.ts';

const checkEmail = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCheckEmail: build.query<boolean, string>({
      query: (email) => ({
        url: `/auth/checkEmail/${email}`
      })
    })
  })
});

export const useLazyGetCheckEmailQuery = checkEmail.useLazyGetCheckEmailQuery;
