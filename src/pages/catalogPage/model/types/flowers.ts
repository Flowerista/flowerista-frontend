export interface IFlowersItem {
  id: number;
  name: string;
  defaultPrice: number;
  discount: number | null;
  discountPrice: number | null;
  imageUrls: Record<string, string>;
  sizes: [];
}

export interface InterfaceAllFlower {
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
  };
}

export interface InterfaceFetchAllFlowers {
  flowerIds?: number[] | string;
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
