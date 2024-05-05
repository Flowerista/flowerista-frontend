import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  orderId: number;
}

const initialState: IInitialState = {
  orderId: 0
};

export const checkOutOrderIdSlice = createSlice({
  name: 'checkoutOrderId',
  initialState,
  reducers: {
    setOrderId: (state, { payload }) => {
      state.orderId = payload;
    }
  }
});

export const { setOrderId } = checkOutOrderIdSlice.actions;
