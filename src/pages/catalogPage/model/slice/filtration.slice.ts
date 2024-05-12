import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '../../../../shared/lib/store';
import { ItemInterface } from '../../../../widgets/catalogFilters/ui/CatalogFilters.tsx';

interface IItem {
  item: string;
  menu: string;
  id: number;
}

export interface IInitialStateFiltration {
  filters: {
    flowerIds: IItem[];
    colorIds: IItem[];
    min: number;
    max: number;
    minPrice: number;
    maxPrice: number;
    sortByNewest: boolean;
    sortByPriceHighToLow: boolean;
    sortByPriceLowToHigh: boolean;
    page: number;
  };
  sorting: {
    item: string;
    id: number;
    sort: boolean;
  }[];
}

const initialState: IInitialStateFiltration = {
  filters: {
    max: 0,
    min: 0,
    flowerIds: [],
    colorIds: [],
    minPrice: 0,
    maxPrice: 9999,
    sortByNewest: false,
    sortByPriceHighToLow: false,
    sortByPriceLowToHigh: false,
    page: 1
  },
  sorting: [
    {
      item: 'sort',
      id: 12,
      sort: false
    },
    {
      item: 'sortByNewest',
      id: 1,
      sort: false
    },
    {
      item: 'sortByPriceHighToLow',
      id: 2,
      sort: false
    },
    {
      item: 'sortByPriceLowToHigh',
      id: 3,
      sort: false
    }
  ]
};

export const filtrationSlice = buildSlice({
  name: 'filtration',
  initialState,
  reducers: {
    // colors and flowers
    addFlowersId: (state, { payload }: PayloadAction<IItem>) => {
      const { item, menu, id } = payload;
      const isExisting = state.filters.flowerIds.some(
        (flowerId) => flowerId.id === id
      );
      if (!isExisting) {
        state.filters.flowerIds.push({ item, menu, id });
      }
    },
    addColorsId: (state, { payload }: PayloadAction<IItem>) => {
      const { item, menu, id } = payload;
      const isExisting = state.filters.colorIds.some(
        (colorId) => colorId.id === id
      );
      if (!isExisting) {
        state.filters.colorIds.push({ item, menu, id });
      }
    },
    removeFlowerId: (state, { payload }: PayloadAction<number>) => {
      const flowersIds = state.filters.flowerIds;
      state.filters.flowerIds = flowersIds.filter(({ id }) => {
        return id !== payload;
      });
    },
    removeColorId: (state, { payload }: PayloadAction<number>) => {
      const flowersIds = state.filters.colorIds;
      state.filters.colorIds = flowersIds.filter(({ id }) => {
        return id !== payload;
      });
    },
    // price
    setMiNumber: (state, { payload }: PayloadAction<number>) => {
      state.filters.min = payload;
    },
    setMaxNumber: (state, { payload }: PayloadAction<number>) => {
      state.filters.max = payload;
    },
    setMinValue: (state, { payload }: PayloadAction<number>) => {
      state.filters.minPrice = payload;
    },
    setMaxValue: (state, { payload }: PayloadAction<number>) => {
      state.filters.maxPrice = payload;
    },
    removeMinMaxValues: (state) => {
      state.filters.minPrice = state.filters.min;
      state.filters.maxPrice = state.filters.max;
    },
    //sorting
    setSorting: (state, { payload }: PayloadAction<string>) => {
      state.sorting = state.sorting.map((option) => ({
        ...option,
        sort: option.item === payload
      }));
    },
    resetSorting: (state) => {
      state.sorting = state.sorting.map((option) => ({
        ...option,
        sort: false
      }));
    },
    removeHandler: (state, { payload }: PayloadAction<ItemInterface>) => {
      if (payload.menu === 'flowers' || payload.menu === 'квіти') {
        const flowersIds = state.filters.flowerIds;
        state.filters.flowerIds = flowersIds.filter(({ id }) => {
          return id !== payload.id;
        });
      } else if (payload.menu === 'colors' || payload.menu === 'кольори') {
        const colorIds = state.filters.colorIds;
        state.filters.colorIds = colorIds.filter(({ id }) => {
          return id !== payload.id;
        });
      } else if (payload.menu === 'minMax') {
        state.filters.minPrice = state.filters.min;
        state.filters.maxPrice = state.filters.max;
      }
    },

    clearFilters: (state, { payload }: PayloadAction<[]>) => {
      state.filters.flowerIds = payload;
      state.filters.colorIds = payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.filters.page = payload;
    }
  }
});

export const {
  useActions: useFiltrationActions,
  actions: filtrationAction,
  reducer: filtrationReducer
} = filtrationSlice;
