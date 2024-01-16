import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useAuthLogged } from '@/components/hooks/useApp'

import SingleCoin from '@/components/screens/singleCoin/SingleCoin'

const SingleCoinPage: FC = (): JSX.Element => {
	const auth = useAuthLogged()
	const { push } = useRouter()

	useEffect(() => {
		if (!auth) {
			push('/login')
		}
	}, [])

	return <SingleCoin />
}

export default SingleCoinPage
