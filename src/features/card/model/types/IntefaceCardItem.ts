export type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface InterfaceSizesSize {
  id: number;
  size: Size;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
}

export interface InterfaceCardItem {
  cartID: string; //id_currentSize
  id: number;
  name: string;
  imageUrls: Record<string, string>;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
  sizes: InterfaceSizesSize[];
  currentSize: Size;
  quantity: number;
}
