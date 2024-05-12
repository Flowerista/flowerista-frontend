import { OrderResponseInterface } from '../../../../../shared/types/orderResponseInterface.ts';
import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { OrderInterface } from '../../../../../shared/types/order-interface.ts';

const createOrderApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation<OrderResponseInterface, OrderInterface>({
      query: (data) => ({
        url: `/order`,
        method: 'POST',
        body: data
      })
    })
  })
});

export const useCreateOrderMutation = createOrderApi.useCreateOrderMutation;
