import { $axiosCoinGeckoApi } from '@/api/api'
import { ICoin } from '@/interfaces/coins.interface/coins.interface'

class CoinGeckoService {
	private URL_LIST_COINS = '/coins/list'
	private URL_FAVORITE_COINS = `/coins/markets?vs_currency=usd`

	async getCoinsList() {
		const { data } = await $axiosCoinGeckoApi.get<any>(`${this.URL_LIST_COINS}`)
		return data
	}

	async getFavoriteCoins(coins: string) {
		const { data } = await $axiosCoinGeckoApi.get<ICoin[]>(
			`${this.URL_FAVORITE_COINS}&ids=${coins}`
		)
		return data
	}
}

export default new CoinGeckoService()
