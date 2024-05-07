import { buildSlice } from '../buildSlice.ts';

interface IInitialState {
  orderId: number;
}

const initialState: IInitialState = {
  orderId: 0
};

export const checkOutOrderIdSlice = buildSlice({
  name: 'checkoutOrderId',
  initialState,
  reducers: {
    setOrderId: (state, { payload }) => {
      state.orderId = payload;
    }
  }
});

export const { useActions: useOrderIdAction } = checkOutOrderIdSlice;
