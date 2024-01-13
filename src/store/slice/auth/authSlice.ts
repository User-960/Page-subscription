import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from '@/interfaces/auth.interface/auth.interface'
import {
	loginUserThunk,
	registerUserThunk
} from '@/store/thunks/authThunk/authThunk'

const initialState: IAuthState = {
	userData: null,
	isLogged: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state: IAuthState) {
			state.userData = null
			state.isLogged = false
		}
	},
	extraReducers: builder => {
		builder.addCase(loginUserThunk.fulfilled, (state: IAuthState, action) => {
			state.userData = action.payload
			state.isLogged = true
		})

		builder.addCase(
			registerUserThunk.fulfilled,
			(state: IAuthState, action) => {
				state.userData = action.payload
				state.isLogged = true
			}
		)
	}
})

export const { logout } = authSlice.actions
export default authSlice.reducer
