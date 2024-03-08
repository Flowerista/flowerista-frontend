export type TSize = 'SMALL' | 'MEDIUM' | 'LARGE';
export interface ISize {
    id: number;
    size: TSize;
    defaultPrice: number;
    discount: number | null;
    discountPrice: number | null;
}

export interface IFlowerCard {
    id: number;
    name: string;
    imageUrls: Record<string, string>
    defaultPrice: number;
    discount: number | null;
    discountPrice: number | null;
    sizes: [];
}

export interface IFlowersItem {
    id: number;
    name: string;
    defaultPrice: number;
    discount: number | null;
    discountPrice: number| null;
    imageUrls: Record<string, string>
    sizes: [];
}

export interface IAllFlower {
    totalPages: number;
    totalElements: number;
    size: number;
    content: IFlowersItem[]; 
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    first: boolean;
    last: boolean;
    numberOfElements: number;
    empty: boolean;
    pageable: {
        pageNumber: number;
        pageSize: number;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        offset: number;
        paged: boolean;
        unpaged: boolean;
    }
}

export interface IFetchAllFlowers {
	flowerIds?: number[]|string;
	colorIds?: number[] | string;
	minPrice?: number;
	maxPrice?: number;
	sortByNewest: boolean;
	sortByPriceHighToLow: boolean;
	sortByPriceLowToHigh: boolean;
	page: number;
  min: number;
  max: number;
}

export interface IFlower{
    id: number;
    name: string
}


interface FlowerId {
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

// interface ImageUrls {
//     [key: string]: string;
// }

export interface IBouquetId {
    id: number;
    name: string;
    itemCode: string;
    imageUrls: Record<string, string>;
    sizes: ISize[];
    flowers: FlowerId[];
    stockQuantity:number
}

export interface ISearchBouquet{
    name:string
    id:number
    defaultPrice: number;
    discountPrice?: number;
    discount?: number;
    imageUrls: Record<string, string>;

}
