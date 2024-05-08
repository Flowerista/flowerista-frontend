import { OrderInterface } from '../../interface/order/order-interface';
import { OrderResponseInterface } from '../../interface/order/orderResponseInterface';
import { rtkApiAuth } from '../../http/rtkApAuthi';

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
