import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from '@/interfaces/auth.interface/auth.interface'

const initialState: IAuthState = {
	user: null,
	isLogged: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state: IAuthState, action) {
			state.user = action.payload
			state.isLogged = true
		}
	}
})

export const { login } = authSlice.actions
export default authSlice.reducer
