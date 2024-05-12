interface OrderItemHistory {
  productId: number;
  name: string;
  quantity: number;
  sizeId: number;
  size: string;
  price: number;
  imageUrls: {
    [key: number]: string;
  };
}

interface AddressHistory {
  city: string;
  street: string;
  house: string;
  entrance: string;
  flat: string;
  date: string | null;
  time: string | null;
  type: string | null;
}

interface UserHistory {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

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
