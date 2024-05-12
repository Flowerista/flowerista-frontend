import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';

const paymentCaptureApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    paymentCapture: build.mutation<{ status: string }, string>({
      query: (token) => ({
        url: `/payment/capture?token=${token}`,
        method: 'POST'
      })
    })
  })
});

export const usePaymentCaptureMutation =
  paymentCaptureApi.usePaymentCaptureMutation;
