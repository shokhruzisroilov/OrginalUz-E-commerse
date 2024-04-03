// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	baskets: [],
	error: null,
	isLoadingBasket: false,
	basketMessage: null,
	errorBasket: null,
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
			state.errorBasket = action.payload
		},
		// add basket
		addBasketStart: state => {
			state.isLoadingBasket = true
		},
		addBasketSuccess: (state, action) => {
			state.isLoadingBasket = false
			state.basketMessage = action.payload
		},
		addBasketFailure: (state, action) => {
			state.isLoadingBasket = false
			state.errorBasket = action.payload
		},
	},
})

export const {
	getBasketStart,
	getBasketSuccess,
	getBasketFailure,
	addBasketStart,
	addBasketSuccess,
	addBasketFailure,
} = basketSlice.actions
export default basketSlice.reducer
