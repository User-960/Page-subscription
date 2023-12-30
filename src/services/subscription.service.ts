import { $axios } from '@/api/api'

class SubscriptionService {
	private URL_SUB = '/subscription'

	async main(email: string) {
		return await $axios.post<any>(`${this.URL_SUB}`, {
			email
		})
	}
}

export default new SubscriptionService()
