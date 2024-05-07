import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '../buildSlice.ts';

interface IItem {
  item: string;
  menu: string;
  id: number;
}

interface IInitialState {
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
}

const initialState: IInitialState = {
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
  }
};

export const filtrationSlice = buildSlice({
  name: 'filtration',
  initialState,
  reducers: {
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
    removeFlowerId: (state, { payload }) => {
      const flowersIds = state.filters.flowerIds;
      state.filters.flowerIds = flowersIds.filter(({ id }) => {
        return id !== payload.id;
      });
    },
    removeColorId: (state, { payload }) => {
      const flowersIds = state.filters.colorIds;
      state.filters.colorIds = flowersIds.filter(({ id }) => {
        return id !== payload.id;
      });
    },

    clearFilters: (state, { payload }) => {
      state.filters.flowerIds = payload;
      state.filters.colorIds = payload;
    },
    setMinValue: (state, { payload }) => {
      state.filters.minPrice = payload;
    },
    setMaxValue: (state, { payload }) => {
      state.filters.maxPrice = payload;
    },
    removeMinMaxValues: (state) => {
      state.filters.minPrice = state.filters.min;
      state.filters.maxPrice = state.filters.max;
    },
    setSortByNewest: (state, { payload }) => {
      state.filters.sortByNewest = payload;
    },
    setSortByPriceHighToLow: (state, { payload }) => {
      state.filters.sortByPriceHighToLow = payload;
    },
    setSortByPriceLowToHigh: (state, { payload }) => {
      state.filters.sortByPriceLowToHigh = payload;
    },
    setMiNumber: (state, { payload }) => {
      state.filters.min = payload;
    },
    setMaxNumber: (state, { payload }) => {
      state.filters.max = payload;
    }
  }
});

export const { useActions: useFiltrationActions } = filtrationSlice;
