import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	products: [],
	error: null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProductsStart: state => {
			state.isLoading = true
		},
		getProductsSuccess: (state, action) => {
			state.isLoading = false
			state.products = action.payload
		},
		getProductsFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default productsSlice.reducer
export const { getProductsStart, getProductsSuccess, getProductsFailure } =
	productsSlice.actions
