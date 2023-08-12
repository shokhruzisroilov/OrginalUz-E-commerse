import { configureStore } from "@reduxjs/toolkit";
import shoping from './features/state/shopingSlice'
import auth from "./features/auth";

export const store = configureStore({
	reducer: {
		shoping,
		auth,
		devTools: process.env.NODE_ENV !== 'production',
	},
})