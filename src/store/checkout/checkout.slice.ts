import { buildSlice } from '../buildSlice.ts';

interface IInitialState {
  city: string;
  street: string;
  house: string;
  flat: string;
  entrance: string;
  date: string;
  time: string;
  type: string;
}

const initialState: IInitialState = {
  city: '',
  street: '',
  house: '',
  flat: '',
  entrance: '',
  date: '',
  time: '',
  type: ''
};

export const checkOutSlice = buildSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDate: (state, { payload }) => {
      state.date = payload;
    },
    setTime: (state, { payload }) => {
      state.time = payload;
    },
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    setStreet: (state, { payload }) => {
      state.street = payload;
    },
    setHouse: (state, { payload }) => {
      state.house = payload;
    },
    setFlat: (state, { payload }) => {
      state.flat = payload;
    },
    setEntrance: (state, { payload }) => {
      state.entrance = payload;
    },
    setTypeToCheckout: (state, { payload }) => {
      state.type = payload;
    }
  }
});

export const { useActions: useCheckoutActions } = checkOutSlice;
