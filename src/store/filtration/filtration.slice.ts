import {createSlice} from '@reduxjs/toolkit'

interface IInitialState{
	filters: {
		flowerIds: {item:string,menu:string,id:number}[];
		colorIds: {item:string,menu:string,id:number}[];
		min: number;
		max: number;
		minPrice: number;
		maxPrice: number;
		sortByNewest: boolean;
		sortByPriceHighToLow: boolean;
		sortByPriceLowToHigh: boolean;
		page: number;
	};
}


const initialState: IInitialState ={
filters:{
	max:0,
	min:0,
	flowerIds:[],
	colorIds:[],
	minPrice:0,
	maxPrice:9999,
	sortByNewest:false,
	sortByPriceHighToLow:false,
	sortByPriceLowToHigh:false,
	page:1,
}

}

export const filtrationSlice = createSlice({
	name: 'filtration',
	initialState,
	reducers: {
		addFlowersId: (state, { payload }) => {
			state.filters.flowerIds.push(payload);
		},
		addColorsId: (state, { payload }) => {
			state.filters.colorIds.push(payload);
		},
		removeFlowerId: (state, { payload }) => {
			const flowersIds = state.filters.flowerIds
			state.filters.flowerIds =flowersIds.filter(({id}) => {
				return id !== payload.id
			})
		},
		removeColorId: (state, { payload }) => {
			const flowersIds = state.filters.colorIds
			state.filters.colorIds =flowersIds.filter(({id}) => {
				return id !== payload.id
			})
		},

		clearFilters: (state, { payload }) => {
			state.filters.flowerIds = payload
			state.filters.colorIds = payload
		},
		setMinValue: (state, { payload }) => {
			state.filters.minPrice = payload
		},
		setMaxValue: (state, { payload }) => {
			state.filters.maxPrice = payload
		},
		removeMinMaxValues: (state) => {
			state.filters.minPrice = state.filters.min
			state.filters.maxPrice = state.filters.max
		},
		setSortByNewest: (state,{payload}) => {
			state.filters.sortByNewest = payload
		},
		setSortByPriceHighToLow: (state,{payload}) => {
			state.filters.sortByPriceHighToLow = payload
		},
		setSortByPriceLowToHigh: (state,{payload}) => {
			state.filters.sortByPriceLowToHigh = payload
		},
		setMiNumber: (state, { payload }) => {
			state.filters.min = payload
		},
		setMaxNumber: (state,{payload})=>{
			state.filters.max=payload
		}

	},

})

export const {  addFlowersId,
	addColorsId,
	removeFlowerId,
	removeColorId,
	clearFilters,
	 setMinValue,
	 setMaxValue,
	removeMinMaxValues,
	 setSortByPriceLowToHigh,
	setSortByPriceHighToLow,
	setSortByNewest,
	 setMaxNumber,
	 setMiNumber
} = filtrationSlice.actions
