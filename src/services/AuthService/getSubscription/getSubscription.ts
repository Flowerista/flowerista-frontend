import { rtkApi } from '../../../shared/api/rtkApi.ts';

const getSubscription = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    subscription: build.mutation<string, string>({
      query: (data) => ({
        url: `/subscription`,
        method: 'POST',
        body: data
      })
    })
  })
});

export const useSubscriptionMutation = getSubscription.useSubscriptionMutation;
