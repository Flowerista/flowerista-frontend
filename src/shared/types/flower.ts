export type TSize = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface ISize {
  id: number;
  size: TSize;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
}

export interface IFlower {
  id: number;
  name: string;
}

export type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface ISize {
  id: number;
  size: Size;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
}

export interface ISearchBouquet {
  name: string;
  id: number;
  defaultPrice: number;
  discountPrice?: number;
  discount?: number;
  imageUrls: Record<string, string>;
}
