import axios from 'axios'
import Cookies from 'js-cookie'

import { EN_USER, SERVER_URL } from '@/config/app.constants'

const API_URL = `${SERVER_URL}`

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(EN_USER.TOKEN)
			? `Bearer ${Cookies.get('secretToken')}`
			: ''
	}
})
