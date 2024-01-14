import React, { FC, useEffect } from 'react'

import { useAppDispatch, useCoinsFavorite } from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'
import { favoriteCoinsThunk } from '@/store/thunks/coinsThunk/coinsThunk'

const Home: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Home',
		description: 'Home page'
	}

	const dispatch = useAppDispatch()
	const favoriteCoins = useCoinsFavorite()

	useEffect(() => {
		dispatch(favoriteCoinsThunk('bitcoin, ethereum'))
	}, [])

	return (
		<Layout meta={meta}>
			<div>
				{favoriteCoins.map(el => (
					<p>{el.name}</p>
				))}
			</div>
		</Layout>
	)
}

export default Home
