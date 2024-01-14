import { $axiosCoinGeckoApi } from '@/api/api'
import { IChartData, ICoin } from '@/interfaces/coins.interface/coins.interface'

class CoinGeckoService {
	private URL_COINS = '/coins'
	private URL_LIST_COINS = '/list'
	private URL_FAVORITE_COINS = `/markets?vs_currency=usd`
	private URL_CHART_PRICE_COINS = `/market_chart?vs_currency=usd&days=90`

	async getCoinsList() {
		const { data } = await $axiosCoinGeckoApi.get<any>(
			`${this.URL_COINS}/${this.URL_LIST_COINS}`
		)
		return data
	}

	async getFavoriteCoins(coins: string) {
		const { data } = await $axiosCoinGeckoApi.get<ICoin[]>(
			`${this.URL_COINS}/${this.URL_FAVORITE_COINS}&ids=${coins}`
		)
		return data
	}

	async getChartPriceCoins(coin: string) {
		const infoPriceCoin = await $axiosCoinGeckoApi.get<IChartData>(
			`${this.URL_COINS}/${coin}${this.URL_CHART_PRICE_COINS}`
		)

		const infoCoin = await $axiosCoinGeckoApi.get<ICoin[]>(
			`${this.URL_COINS}/${this.URL_FAVORITE_COINS}&ids=${coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
		)

		return {
			name: coin,
			info_coin: infoCoin.data[0],
			data_price: infoPriceCoin.data
		}
	}
}

export default new CoinGeckoService()
