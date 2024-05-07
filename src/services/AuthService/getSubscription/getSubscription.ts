import {rtkApi} from '../../../http/rtkApi';

const getSubscription = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		subscription: build.mutation<any, any>({
			query: (data) => ({
				url: `/subscription`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
});


export const useSubscriptionMutation = getSubscription.useSubscriptionMutation;
