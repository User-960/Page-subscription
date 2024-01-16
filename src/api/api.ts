import axios from 'axios'
import Cookies from 'js-cookie'

import {
	COINGECKO_URL,
	CRYPTO_COMPARE_URL,
	EN_USER,
	SERVER_URL
} from '@/config/app.constants'

const API_URL = `${SERVER_URL}`
const API_COINGECKO_URL = `${COINGECKO_URL}/api/v3`
const API_CRYPTO_COMPARE_URL = `${CRYPTO_COMPARE_URL}`

export const $axiosAuth = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(EN_USER.TOKEN)
			? `Bearer ${Cookies.get(EN_USER.TOKEN)}`
			: ''
	}
})

export const $axiosCoinGeckoApi = axios.create({
	baseURL: API_COINGECKO_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

export const $axiosCryptoCompareApi = axios.create({
	baseURL: API_CRYPTO_COMPARE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
