import { ICartItem } from '../../../store/cart/cart.slice.ts';

export const getTotalPrice = (cart: ICartItem[]) => {
  if (cart.length > 0) {
    return cart
      .map(
        ({ defaultPrice, discountPrice, quantity }) =>
          (discountPrice || defaultPrice) * quantity
      )
      .reduce((a, b) => a + b);
  } else {
    return 0;
  }
};
