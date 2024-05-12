import { rtkApiAuth } from '../../../../../shared/api/rtkApAuthi.ts';
import { OrderResponse } from '../../types/orderHistoryInterface.ts';

const getOrderHistoryApi = rtkApiAuth.injectEndpoints({
  endpoints: (build) => ({
    getOrderHistory: build.query<OrderResponse[], void>({
      query: () => ({
        url: `/order/history`
      })
    })
  })
});

export const useGetOrderHistory = getOrderHistoryApi.useGetOrderHistoryQuery;
