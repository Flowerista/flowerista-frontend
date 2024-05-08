import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '../buildSlice.ts';

interface IInitialState {
  modals: {
    cartModalOpen: boolean;
    wishlistModalOpen: boolean;
    sidebarModalOpen: boolean;
  };
}

const initialState: IInitialState = {
  modals: {
    cartModalOpen: false,
    wishlistModalOpen: false,
    sidebarModalOpen: false
  }
};

export const modalsSlice = buildSlice({
  name: 'filtration',
  initialState,
  reducers: {
    setCartModalOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.modals.cartModalOpen = payload;
    },
    setWishlistModalOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.modals.wishlistModalOpen = payload;
    },
    setSidebarModalOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.modals.sidebarModalOpen = payload;
    }
  }
});

export const { useActions: useModalActions } = modalsSlice;
