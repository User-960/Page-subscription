import { createAsyncThunk } from '@reduxjs/toolkit'

import { EN_USER } from '@/config/app.constants'
import {
	IAuthFormFieldsLogin,
	IAuthFormFieldsRegister
} from '@/interfaces/auth.interface/auth.interface'
import AuthService from '@/services/auth.service'

export const loginUserThunk = createAsyncThunk(
	'auth/login',
	async (data: IAuthFormFieldsLogin, { rejectWithValue }) => {
		try {
			const user = await AuthService.loginUser(data.email, data.password)
			localStorage.setItem('name', `${user.user.firstName}`)
			return user
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)

export const registerUserThunk = createAsyncThunk(
	'auth/register',
	async (data: IAuthFormFieldsRegister, { rejectWithValue }) => {
		try {
			const user = await AuthService.createUser(
				data.firstName,
				data.username,
				data.email,
				data.password,
				data.repeatPassword
			)
			localStorage.setItem(EN_USER.FIRST_NAME, `${user.user.firstName}`)
			return user
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)
