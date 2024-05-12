import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '../../../../shared/lib/store';

export interface IInitialStateModals {
  modals: {
    cartModalOpen: boolean;
    wishlistModalOpen: boolean;
    sidebarModalOpen: boolean;
  };
}

const initialState: IInitialStateModals = {
  modals: {
    cartModalOpen: false,
    wishlistModalOpen: false,
    sidebarModalOpen: false
  }
};

export const modalsSlice = buildSlice({
  name: 'modals',
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

export const {
  useActions: useModalActions,
  reducer: modalsReducer,
  actions: modalsActions
} = modalsSlice;
