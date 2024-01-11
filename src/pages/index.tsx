import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuthLogged } from '@/components/hooks/useAppAuth'

import Home from '@/components/screens/home/Home'

export const HomePage = () => {
	const auth = useAuthLogged()
	const { push } = useRouter()

	useEffect(() => {
		if (!auth) {
			push('/login')
		}
	}, [])

	return auth && <Home />
}

export default HomePage
