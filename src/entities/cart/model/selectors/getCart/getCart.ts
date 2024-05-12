import { buildSelector } from '../../../../../shared/lib/store';

export const [useCart, getCart] = buildSelector((state) => state.cart.cart);
