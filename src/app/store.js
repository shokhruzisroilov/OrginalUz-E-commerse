import { configureStore } from "@reduxjs/toolkit";
import shoping from './features/state/shopingSlice'

export const store = configureStore({
	reducer: {
		shoping,
		devTools: process.env.NODE_ENV !== 'production',
	},
})