import { Size } from '../../../store/cart/cart.slice.ts';

export function generateCartID(id: number, size: Size): string {
  return `${id}_${size}`;
}
