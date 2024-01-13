import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuthLogged } from '@/components/hooks/useAppAuth'

import Watchlist from '@/components/screens/watchlist/Watchlist'

export const WatchlistPage = () => {
	const auth = useAuthLogged()
	const { push } = useRouter()

	useEffect(() => {
		if (!auth) {
			push('/login')
		}
	}, [])

	return auth && <Watchlist />
}

export default WatchlistPage
