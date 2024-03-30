import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	products: [],
	productDetail: [],
	error: null,
	searchStr: '',
	searchResults: [],
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
		onSearch: (state, action) => {
			state.searchStr = action.payload
			if (state.searchStr) {
				state.searchResults = state.products.filter(
					item =>
						item.title.toLowerCase().includes(state.searchStr.toLowerCase()) ||
						item.category.title
							.toLowerCase()
							.includes(state.searchStr.toLowerCase())
				)
			}
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
	onSearch,
} = productsSlice.actions
