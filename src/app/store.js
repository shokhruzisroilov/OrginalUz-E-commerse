import { configureStore } from '@reduxjs/toolkit'
import shoping from './features/state/shopingSlice'
import auth from './features/auth'
import products from './features/products/productsSlice'
import category from './features/category/categorySlice'
import baskets from './features/basket/basketSlice'

export const store = configureStore({
	reducer: {
		shoping,
		auth,
		products,
		category,
		baskets,
		devTools: process.env.NODE_ENV !== 'production',
	},
})
