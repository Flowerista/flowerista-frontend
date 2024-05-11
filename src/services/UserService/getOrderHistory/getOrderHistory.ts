import { rtkApiAuth } from '../../../shared/api/rtkApAuthi.ts';
import {
  AddressHistory,
  OrderItemHistory,
  UserHistory
} from '../../../widgets/profileOrders/ProfileOrders.tsx';

export interface OrderResponse {
  id: number;
  status: string;
  payId: string | null;
  userId: number;
  sum: number;
  orderItems: OrderItemHistory[];
  address: AddressHistory;
  user: UserHistory;
  created: number | null;
  updated: number | null;
}

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
