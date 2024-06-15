// export const SERVER_URL = process.env.SERVER_URL
// export const COINGECKO_URL = process.env.COIN_GECKO_URL
// export const CRYPTO_COMPARE_URL = process.env.CRYPTO_COMPARE_URL

export const SERVER_URL = 'http://localhost:5000'
// export const COINGECKO_URL =
// 	'https://api.coingecko.com' +
// 	'/api/v3/' +
// 	'ping?x_cg_demo_api_key' +
// 	'?x_cg_demo_api_key' +
// 	process.env.COINGECKO_API_KEY
export const COINGECKO_URL = 'https://api.coingecko.com'
export const CRYPTO_COMPARE_URL = 'https://min-api.cryptocompare.com/data/v2'

export enum EN_USER {
	TOKEN = 'secretToken',
	FIRST_NAME = 'name'
}
