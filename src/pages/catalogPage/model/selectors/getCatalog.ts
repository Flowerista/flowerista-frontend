import { buildSelector } from '../../../../shared/lib/store';

export const [useFiltration, getFiltration] = buildSelector(
  (state) => state.filtration?.filters
);
export const [useSorting, getSorting] = buildSelector(
  (state) => state.filtration?.sorting
);
export const [useFlowersIds, getFlowersIdS] = buildSelector(
  (state) => state.filtration?.filters.flowerIds
);
export const [useColorsIds, getColorsIdS] = buildSelector(
  (state) => state.filtration?.filters.colorIds
);
export const [useMax, getMax] = buildSelector(
  (state) => state.filtration?.filters.max
);
export const [useMin, getMin] = buildSelector(
  (state) => state.filtration?.filters.min
);
export const [usePage, getPage] = buildSelector(
  (state) => state.filtration?.filters.page
);
export const [useMinPrice, getMinPrice] = buildSelector(
  (state) => state.filtration?.filters.minPrice
);
export const [useMaxPrice, getMaxPrice] = buildSelector(
  (state) => state.filtration?.filters.maxPrice
);
export const [useSortByNewest, getSortByNewest] = buildSelector(
  (state) => state.filtration?.filters.sortByNewest
);
export const [useSortByPriceHighToLow, getSortByPriceHighToLow] = buildSelector(
  (state) => state.filtration?.filters.sortByPriceHighToLow
);
export const [useSortByPriceLowToHigh, getSortByPriceLowToHigh] = buildSelector(
  (state) => state.filtration?.filters.sortByPriceLowToHigh
);
