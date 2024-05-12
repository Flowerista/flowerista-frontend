import { Size } from '../../types/flower.ts';

export function generateCartID(id: number, size: Size): string {
  return `${id}_${size}`;
}
