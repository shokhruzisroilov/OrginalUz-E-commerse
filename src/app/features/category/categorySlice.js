// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	categories: [],
	error: null,
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		// getcategory
		getCategoryStart: state => {
			state.isLoading = true
		},
		getCategorySuccess: (state, action) => {
			state.isLoading = false
			state.categories = action.payload
		},
		getCategoryFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { getCategoryStart, getCategorySuccess, getCategoryFailure } =
	categorySlice.actions
export default categorySlice.reducer
