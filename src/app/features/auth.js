import { createSlice } from '@reduxjs/toolkit'
import { setItem } from '../../heplers/persistanceStorage'

const initialState = {
	isLoading: false,
	loggedIn: false,
	errorReg: null,
	errorLog: null,
	register: null,
	login: null,
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
			state.isLoading = false
			state.register = action.payload
		},
		registerUserFailure: (state, action) => {
			state.isLoading = false
			state.errorReg = action.payload
		},
		//login
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.login = action.payload
			setItem('token', action.payload.key)
		},
		loginUserFailure: (state, action) => {
			state.isLoading = false
			state.errorLog = action.payload
		},
		logoutUser: state => {
			state.login = null
			state.loggedIn = false
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
	logoutUser,
} = authSlice.actions
