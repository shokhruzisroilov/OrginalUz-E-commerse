import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	active: false,
}
const shopingSlice = createSlice({
	name: 'shoping',
	initialState,
	reducers: {
		handelClick: (state) => {
			state.active = !state.active
		},
	},
})

export default shopingSlice.reducer

export const { handelClick } = shopingSlice.actions
