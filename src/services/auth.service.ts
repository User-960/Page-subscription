import Cookies from 'js-cookie'

import { $axiosAuth } from '@/api/api'
import { EN_USER } from '@/config/app.constants'
import { IUserResponse } from '@/interfaces/auth.interface/auth.interface'
import { IWatchlist } from '@/interfaces/watchlist.interface/watchlist.interface'

class AuthService {
	private URL_LOGIN = '/auth/login'
	private URL_REGISTER = '/auth/register'
	private URL_WATCHLIST = '/watchlist'

	async loginUser(email: string | null, password: string | null) {
		const { data } = await $axiosAuth.post<IUserResponse>(`${this.URL_LOGIN}`, {
			email,
			password
		})

		if (data.token) Cookies.set(EN_USER.TOKEN, data.token)

		return data
	}

	async createUser(
		firstName: string | null,
		username: string | null,
		email: string | null,
		password: string | null,
		repeatPassword: string | null
	) {
		const { data } = await $axiosAuth.post<IUserResponse>(
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
	}

	async createNewWatchlist(
		name: string | null,
		assetId: string | number | null
	) {
		const { data } = await $axiosAuth.post<IWatchlist[]>(
			`${this.URL_WATCHLIST}/create`,
			{
				name,
				assetId
			}
		)

		return data
	}

	async getAllWatchlist() {
		const { data } = await $axiosAuth.get<IWatchlist[]>(
			`${this.URL_WATCHLIST}/get-elements`
		)

		return data
	}
}

export default new AuthService()
