import {createSlice} from '@reduxjs/toolkit'


interface IInitialState {
	city: string
	street: string
	house: string
	flat: string
	entrance: string
	date: string
	time: string
	shopDate: string
	shopTime: string
}


const initialState: IInitialState = {
	city: '',
	street: '',
	house: '',
	flat: '',
	entrance: '',
	date: '',
	time: '',
	shopDate: '',
	shopTime: '',
}

export const checkOutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		setDate: (state, {payload}) => {
			state.date = payload
		},
		setTime: (state, {payload}) => {
			state.time = payload
		},
		setShopTime: (state, {payload}) => {
			state.shopTime = payload
		},
		setShopDate: (state, {payload}) => {
			state.shopDate = payload
		},
		setCity: (state, {payload}) => {
			state.city = payload
		},
		setStreet: (state, {payload}) => {
			state.street = payload
		},
		setHouse: (state, {payload}) => {
			state.house = payload
		},
		setFlat: (state, {payload}) => {
			state.flat = payload
		},
		setEntrance: (state, {payload}) => {
			state.entrance = payload
		},
	},

})

export const {
	setEntrance,
	setStreet,
	setCity,
	setFlat,
	setTime,
	setHouse,
	setDate,
	setShopTime,
	setShopDate,
} = checkOutSlice.actions
