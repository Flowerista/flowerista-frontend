import { InterfaceCardItem } from '../../../features/card/model/types/IntefaceCardItem.ts';

export const getTotalPrice = (cart: InterfaceCardItem[]) => {
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
