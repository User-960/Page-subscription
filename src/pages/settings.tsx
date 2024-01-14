import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuthLogged } from '@/components/hooks/useApp'

import Settings from '@/components/screens/settings/Settings'

export const SettingsPage = () => {
	const auth = useAuthLogged()
	const { push } = useRouter()

	useEffect(() => {
		if (!auth) {
			push('/login')
		}
	}, [])

	return auth && <Settings />
}

export default SettingsPage
