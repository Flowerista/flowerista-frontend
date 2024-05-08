import { rtkApi } from '../../../http/rtkApi';

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
