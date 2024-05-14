import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';

interface RequestPaypalInit {
  payId: string;
  redirectUrl: string;
  status: string;
}

const paymentInitApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    paymentInit: build.mutation<RequestPaypalInit, number>({
      query: (paymentId) => ({
        url: `/payment/init?orderId=${paymentId}`,
        method: 'POST'
      })
    })
  })
});

export const usePaymentInitMutation = paymentInitApi.usePaymentInitMutation;
