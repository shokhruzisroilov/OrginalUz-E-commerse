import { configureStore } from '@reduxjs/toolkit'
import shoping from './features/state/shopingSlice'
import auth from './features/auth'
import products from './features/products/productsSlice'
import category from './features/category/categorySlice'

export const store = configureStore({
	reducer: {
		shoping,
		auth,
		products,
		category,
		devTools: process.env.NODE_ENV !== 'production',
	},
})
