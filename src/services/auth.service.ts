import Cookies from 'js-cookie'

import { $axios } from '@/api/api'
import { EN_USER } from '@/config/app.constants'
import { IUserResponse } from '@/interfaces/form.interface'

class AuthService {
	private URL_LOGIN = '/auth/login'

	async loginUser(email: string | null, password: string | null) {
		try {
			const { data } = await $axios.post<IUserResponse>(`${this.URL_LOGIN}`, {
				email,
				password
			})

			if (data.token) Cookies.set(EN_USER.TOKEN, data.token)

			return data
		} catch (error) {
			console.log(error)
		}
	}
}

export default new AuthService()
