import { configureStore } from '@reduxjs/toolkit'
import shoping from './features/state/shopingSlice'
import auth from './features/auth'
import products from './features/products/productsSlice'

export const store = configureStore({
	reducer: {
		shoping,
		auth,
		products,
		devTools: process.env.NODE_ENV !== 'production',
	},
})
