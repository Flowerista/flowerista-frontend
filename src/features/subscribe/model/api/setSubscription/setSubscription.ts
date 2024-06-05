import { rtkApi } from '../../../../../shared/api/rtkApi.ts';

const setSubscription = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    subscription: build.mutation<string, string>({
      query: (data) => ({
        url: `/subscription`,
        method: 'POST',
        body: {
          email: data
        }
      })
    })
  })
});

export const useSubscriptionMutation = setSubscription.useSubscriptionMutation;
