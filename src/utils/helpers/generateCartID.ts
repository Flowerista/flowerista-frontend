import { Size } from "../../store/cart/cart.slice";

export function generateCartID(id: number, size: Size): string {
    return `${id}_${size}`
}