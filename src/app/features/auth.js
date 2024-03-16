import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
	token: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		//register
		registerUserStart: state => {
			state.isLoading = true
		},
		registerUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.user = action.payload
		},
		registerUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		//login
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.token = action.payload
		},
		loginUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default authSlice.reducer
export const {
	registerUserStart,
	registerUserSuccess,
	registerUserFailure,
	loginUserStart,
	loginUserSuccess,
	loginUserFailure,
} = authSlice.actions
