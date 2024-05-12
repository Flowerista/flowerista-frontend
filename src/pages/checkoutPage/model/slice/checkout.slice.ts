import { buildSlice } from '../../../../shared/lib/store';
import { PayloadAction } from '@reduxjs/toolkit';
import { IInitialStateCheckout } from '../types/IInitialStateCheckout.ts';

const initialState: IInitialStateCheckout = {
  city: '',
  street: '',
  house: '',
  flat: '',
  entrance: '',
  date: '',
  time: '',
  type: 'mail'
};

export const checkOutSlice = buildSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDate: (state, { payload }: PayloadAction<string>) => {
      state.date = payload;
    },
    setTime: (state, { payload }: PayloadAction<string>) => {
      state.time = payload;
    },
    setCity: (state, { payload }: PayloadAction<string>) => {
      state.city = payload;
    },
    setStreet: (state, { payload }: PayloadAction<string>) => {
      state.street = payload;
    },
    setHouse: (state, { payload }: PayloadAction<string>) => {
      state.house = payload;
    },
    setFlat: (state, { payload }: PayloadAction<string>) => {
      state.flat = payload;
    },
    setEntrance: (state, { payload }: PayloadAction<string>) => {
      state.entrance = payload;
    },
    setTypeToCheckout: (state, { payload }: PayloadAction<string>) => {
      state.type = payload;
    },
    resetAllState: (state) => {
      state.date = '';
      state.city = '';
      state.street = '';
      state.time = '';
      state.house = '';
      state.flat = '';
      state.entrance = '';
      state.type = 'mail';
    }
  }
});

export const {
  useActions: useCheckoutActions,
  actions: checkoutAction,
  reducer: checkoutReducer
} = checkOutSlice;
