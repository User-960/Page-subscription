import Cookies from 'js-cookie'

import { $axios } from '@/api/api'
import { EN_USER } from '@/config/app.constants'
import { IUserResponse } from '@/interfaces/auth.interface/auth.interface'

class AuthService {
	private URL_LOGIN = '/auth/login'
	private URL_REGISTER = '/auth/register'

	async loginUser(email: string | null, password: string | null) {
		try {
			const { data } = await $axios.post<IUserResponse>(`${this.URL_LOGIN}`, {
				email,
				password
			})

			if (data.token) Cookies.set(EN_USER.TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(`Mistake: ${error}`)
		}
	}

	async createUser(
		firstName: string | null,
		username: string | null,
		email: string | null,
		password: string | null,
		repeatPassword: string | null
	) {
		try {
			const { data } = await $axios.post<IUserResponse>(
				`${this.URL_REGISTER}`,
				{
					firstName,
					username,
					email,
					password,
					repeatPassword
				}
			)

			if (data.token) Cookies.set(EN_USER.TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(`Mistake: ${error}`)
		}
	}
}

export default new AuthService()
