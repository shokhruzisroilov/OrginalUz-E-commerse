import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state, actions) => {
			console.log('hello')
		},
	},
})

export default productsSlice.reducer
export const { getProducts } = productsSlice.actions
