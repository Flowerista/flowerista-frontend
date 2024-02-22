import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import UserService from "../../services/UserService/UserService";
import { IFlowerCard } from "../../interface/flower";

interface IInitialState {
    wishlist:  IFlowerCard[];
    loadingStatus: {
        getWishlist: boolean;
        addCard: boolean;
        deleteCard: boolean;
    };
    errorStatus: {
        getWishlist: boolean | SerializedError;
        addCard: boolean | SerializedError;
        deleteCard: boolean | SerializedError;
    };
}

const initialState: IInitialState = {
    wishlist: [],
    loadingStatus: {
        getWishlist: false,
        addCard: false,
        deleteCard: false,
    },
    errorStatus: {
        getWishlist: false,
        addCard: false,
        deleteCard: false,
    }
}

export const getWishlist = createAsyncThunk(
    'wishlist/getWishlist',
    async () => {        
        return await UserService.wishlist()
    }
)

export const addCard = createAsyncThunk(
    'wishlist/addCard',
    async (card: IFlowerCard) => {
        const {id} = card        
        return await UserService.addCardToWishlist(id)
    }
)

export const deleteCard = createAsyncThunk(
    'wishlist/deleteCard',
    async (cardId: number) => {        
        return await UserService.deleteCardFromWishlist(cardId)
    }
)


export const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {},
    extraReducers: (builder) => {
        builder
            // getWishlist
            .addCase(getWishlist.pending, (state) => {
                state.errorStatus.getWishlist = false
                state.loadingStatus.getWishlist = true
            })
            .addCase(getWishlist.fulfilled, (state, action) => {
                state.wishlist = action.payload.data
                state.loadingStatus.getWishlist = false
            })
            .addCase(getWishlist.rejected, (state, action) => {
                state.loadingStatus.getWishlist = false
                state.errorStatus.getWishlist = action.error
            })
            // addCard
            .addCase(addCard.pending, (state) => {
                state.errorStatus.addCard = false
                state.loadingStatus.addCard = true
            })
            .addCase(addCard.fulfilled, (state, action) => {
                state.loadingStatus.addCard = false
                state.wishlist.push(action.meta.arg)
            })
            .addCase(addCard.rejected, (state, action) => {
                state.loadingStatus.addCard = false
                state.errorStatus.addCard = action.error
            })
            //deleteCard
            .addCase(deleteCard.pending, (state) => {
                state.errorStatus.deleteCard = false
                state.loadingStatus.deleteCard = true
            })
            .addCase(deleteCard.fulfilled, (state, action) => {
                state.loadingStatus.deleteCard = false
                state.wishlist = state.wishlist.filter(card => card.id !== action.meta.arg)
            })
            .addCase(deleteCard.rejected, (state, action) => {
                state.loadingStatus.deleteCard = false
                state.errorStatus.deleteCard = action.error
            })
    }
})