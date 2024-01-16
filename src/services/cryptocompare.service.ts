import { $axiosCoinGeckoApi, $axiosCryptoCompareApi } from '@/api/api'
import { IChartData, ICoin } from '@/interfaces/coins.interface/coins.interface'

class CryptoCompareService {
	private URL_NEWS = '/news/?lang=EN'

	async getNews() {
		const { data } = await $axiosCryptoCompareApi.get<any>(`${this.URL_NEWS}`)
		return data.Data
	}
}

export default new CryptoCompareService()
