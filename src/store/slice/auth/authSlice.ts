import { createSlice } from '@reduxjs/toolkit'

import { EN_USER } from '@/config/app.constants'
import { IAuthState } from '@/interfaces/auth.interface/auth.interface'
import {
	loginUserThunk,
	registerUserThunk
} from '@/store/thunks/authThunk/authThunk'

const initialState: IAuthState = {
	userData: null,
	userName: 'User',
	isLogged: true,
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state: IAuthState, action) {
			state.userName = localStorage.getItem(EN_USER.FIRST_NAME)
			state.isLogged = true
		},
		logout(state: IAuthState) {
			state.userData = null
			state.isLogged = false
		}
	},
	extraReducers: builder => {
		builder.addCase(loginUserThunk.pending, (state: IAuthState, action) => {
			state.isLogged = false
			state.isLoading = true
		})
		builder.addCase(loginUserThunk.fulfilled, (state: IAuthState, action) => {
			state.userData = action.payload
			state.userName = action.payload.user.firstName
			state.isLogged = true
			state.isLoading = false
		})
		builder.addCase(loginUserThunk.rejected, (state: IAuthState, action) => {
			state.isLogged = false
			state.isLoading = false
		})

		builder.addCase(registerUserThunk.pending, (state: IAuthState, action) => {
			state.isLogged = false
			state.isLoading = true
		})
		builder.addCase(
			registerUserThunk.fulfilled,
			(state: IAuthState, action) => {
				state.userData = action.payload
				state.userName = action.payload.user.firstName
				state.isLogged = true
				state.isLoading = false
			}
		)
		builder.addCase(registerUserThunk.rejected, (state: IAuthState, action) => {
			state.isLogged = false
			state.isLoading = false
		})
	}
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
