export interface OrderInterface {
  sum: number;
  orderItems: OrderItem[];
  address: Address;
}

interface Address {
  city: string;
  street: string;
  house: string;
  entrance: string;
  flat: string;
  date: string;
  time: string;
  type: string;
}

interface OrderItem {
  productId: number;
  name: string;
  quantity: number;
  sizeId: number | undefined;
  colorId: number;
  price: number;
  discountPrice: number | null;
}
