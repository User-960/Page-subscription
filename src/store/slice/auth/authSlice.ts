import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from '@/interfaces/auth.interface/auth.interface'

const initialState: IAuthState = {
	userData: null,
	isLogged: true
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state: IAuthState, action) {
			state.userData = action.payload
			state.isLogged = true
		},
		logout(state: IAuthState) {
			state.userData = null
			state.isLogged = false
		}
	}
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
