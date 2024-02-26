import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface IInitialState {
    modals: {
        cartModalOpen: boolean;
        wishlistModalOpen: boolean;
    }
}

const initialState: IInitialState = {
    modals: {
        cartModalOpen: false,
        wishlistModalOpen: false, 
    }
}

export const modalsSlice = createSlice({
	name: 'filtration',
	initialState,
	reducers: {
        setCartModalOpen: (state, {payload}: PayloadAction<boolean>) => {
            state.modals.cartModalOpen = payload
        },
        setWishlistModalOpen: (state, {payload}: PayloadAction<boolean>) => {
            state.modals.wishlistModalOpen = payload
        }
    }
})

export const {
    setCartModalOpen,
    setWishlistModalOpen
} = modalsSlice.actions