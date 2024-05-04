import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../interface/global';

interface IInitialState {
	user: IUser
}

const initialState: IInitialState = {
	user: {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: 0,
		address: {
			city: null,
			street: null,
			house: null,
			entrance: null,
			flat: null,
		},
	},
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		clearDataUser: (state) => {
			state.user = initialState.user
		},
		setProfile: (state, {payload}: PayloadAction<IUser>) => {
			state.user = payload
		},
		logout: (state) => {
			state.user = initialState.user
			localStorage.removeItem('token')
			localStorage.removeItem('refresh')
		},
	},
})

export const {clearDataUser, setProfile, logout} = profileSlice.actions
