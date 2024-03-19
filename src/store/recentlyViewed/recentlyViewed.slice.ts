import {createSlice} from '@reduxjs/toolkit'
import { IFlowerCard } from '../../interface/flower';

interface IInitialState{
	recentlyViewed:IFlowerCard[],
	maxRecentlyViewedLength:number
}


const initialState: IInitialState ={
	recentlyViewed: [],
	maxRecentlyViewedLength: 5,
}

export const recentlyViewedSlice = createSlice({
	name: 'recentlyViewed',
	initialState,
	reducers:{
		addToRecentlyViewed: (state, action) => {
			const { recentlyViewed, maxRecentlyViewedLength } = state;
			const newProduct = action.payload;

			// Проверка наличия товара в массиве
			const isProductInList = recentlyViewed.some((product) => product.id === newProduct.id);

			// Если товар уже есть, не добавлять повторно
			if (!isProductInList) {
				// Добавить товар в начало массива
				state.recentlyViewed.unshift(newProduct);

				// Ограничение по длине массива
				if (recentlyViewed.length > maxRecentlyViewedLength) {
					state.recentlyViewed.pop(); // Убрать последний элемент
				}
			}
		},
	},

})

export const {
	addToRecentlyViewed
} = recentlyViewedSlice.actions
