export interface IFlowerCard {
    id: number;
    name: string;
    defaultPrice: number;
    discount?: number;
    discountPrice?: number;
    imageUrls?: string[]
}
