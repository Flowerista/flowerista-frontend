import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface IInitialState {
    modals: {
        cartModalOpen: boolean
    }
}

const initialState: IInitialState = {
    modals: {
        cartModalOpen: false
    }
}

export const modalsSlice = createSlice({
	name: 'filtration',
	initialState,
	reducers: {
        setCartModalOpen: (state, {payload}: PayloadAction<boolean>) => {
            state.modals.cartModalOpen = payload
        } 
    }
})

export const {
    setCartModalOpen
} = modalsSlice.actions