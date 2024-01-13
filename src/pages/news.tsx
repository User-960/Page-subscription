import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuthLogged } from '@/components/hooks/useAppAuth'

import News from '@/components/screens/news/News'

export const NewsPage = () => {
	const auth = useAuthLogged()
	const { push } = useRouter()

	useEffect(() => {
		if (!auth) {
			push('/login')
		}
	}, [])

	return auth && <News />
}

export default NewsPage
