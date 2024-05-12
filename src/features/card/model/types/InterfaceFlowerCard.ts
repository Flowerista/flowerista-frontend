export interface InterfaceFlowerCard {
  id: number;
  name: string;
  imageUrls: Record<string, string>;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
  sizes: [];
}
