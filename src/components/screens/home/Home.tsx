import React, { FC, useEffect, useRef } from 'react'

import {
	useAppDispatch,
	useChartPriceCoins,
	useCoinsFavorite
} from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'
import {
	chartPriceCoinsThunk,
	favoriteCoinsThunk
} from '@/store/thunks/coinsThunk/coinsThunk'

const Home: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Home',
		description: 'Home page'
	}

	const testCoins = ['bitcoin', 'ethereum']

	const dispatch = useAppDispatch()
	// const favoriteCoins = useCoinsFavorite()
	const chartPriceCoins = useChartPriceCoins()

	const fetchData = (data: string[]) => {
		data.forEach(el => {
			dispatch(chartPriceCoinsThunk(el))
		})
	}

	const fetchDataRef = useRef(false)

	useEffect(() => {
		// dispatch(favoriteCoinsThunk('bitcoin, ethereum'))
		if (fetchDataRef.current) {
			return
		} else {
			fetchDataRef.current = true
			fetchData(testCoins)
		}
	}, [])

	return (
		<Layout meta={meta}>
			<div>The Home Page</div>
		</Layout>
	)
}

export default Home
