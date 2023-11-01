import {createSlice} from '@reduxjs/toolkit'

interface IInitialState{
	flowerIds:number|null
}
const initialState: IInitialState ={
	 flowerIds:null
}

export const filtrationSlice = createSlice({
	name: 'filtration',
	initialState,
	reducers: {
		setFlowerIds: (state, {payload}) => {
      state.flowerIds = payload
    }
	},
})

export const {  setFlowerIds} = filtrationSlice.actions
