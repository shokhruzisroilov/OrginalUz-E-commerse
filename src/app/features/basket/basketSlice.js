// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	baskets: [],
	error: null,
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		// basket
		getBasketStart: state => {
			state.isLoading = true
		},
		getBasketSuccess: (state, action) => {
			state.isLoading = false
			state.baskets = action.payload
		},
		getBasketFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { getBasketStart, getBasketSuccess, getBasketFailure } =
	basketSlice.actions
export default basketSlice.reducer
