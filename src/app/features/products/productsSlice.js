import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	products: [],
	productDetail: [],
	error: null,
	searchResults: [],
	filterProducts: [],
	orderProducts: null,
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
			state.searchResults = action.payload
			state.filterProducts = action.payload
		},
		getProductsFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		getProductDetailsStart: state => {
			state.isLoading = true
		},
		getProductDetailsSuccess: (state, action) => {
			state.isLoading = false
			state.productDetail = action.payload
		},
		getProductDetailsFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		// prodctSearch
		searchedProduct: (state, action) => {
			state.products = state.searchResults.filter(
				product =>
					product.title.toLowerCase().includes(action.payload.toLowerCase()) ||
					product.category.title
						.toLowerCase()
						.includes(action.payload.toLowerCase())
			)
		},
		// productFilter
		filteredProduct: (state, action) => {
			state.products = state.filterProducts.filter(
				product => product.category.id === action.payload
			)
		},
		// createProductOrder
		createProductsOrder: (state, action) => {
			state.orderProducts = action.payload
		},
	},
})

export default productsSlice.reducer
export const {
	getProductsStart,
	getProductsSuccess,
	getProductsFailure,
	getProductDetailsStart,
	getProductDetailsSuccess,
	getProductDetailsFailure,
	searchedProduct,
	filteredProduct,
	createProductsOrder,
} = productsSlice.actions
