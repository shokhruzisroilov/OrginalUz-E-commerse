import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		//register
		registerUserStart: state => {
			state.isLoading = true
		},
		registerUserSuccess: state => {
			state.isLoading = false
			state.loggedIn = true
		},
		registerUserFailure: state => {
			state.isLoading = false
		},
	},
})

export default authSlice.reducer
export const { registerUserStart, registerUserSuccess, registerUserFailure } =
	authSlice.actions
