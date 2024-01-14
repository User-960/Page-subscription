import { Box, Grid, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react'

import AreaChart from '@/components/ui/charts/areaChart/AreaChart'

import {
	useAppDispatch,
	useChartPriceCoins,
	useCoinsFavorite
} from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import TrendDown from '../../../assets/images/Chart/trendDown.svg'
import TrendUp from '../../../assets/images/Chart/trendUp.svg'

import styles from './Home.module.scss'
import { ICoinChartData } from '@/interfaces/coins.interface/coins.interface'
import {
	chartPriceCoinsThunk,
	favoriteCoinsThunk
} from '@/store/thunks/coinsThunk/coinsThunk'
import { tokens } from '@/theme/theme'

const cn = require('clsx')

const Home: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Home',
		description: 'Home page'
	}
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const testCoins = useMemo(() => ['bitcoin', 'ethereum'], [])

	const dispatch = useAppDispatch()
	const chartPriceCoins = useChartPriceCoins()
	const filteredChartPriceCoins = chartPriceCoins.filter(
		(value: ICoinChartData, index: number, self: ICoinChartData[]) =>
			index === self.findIndex(t => t.name === value.name)
	)

	const fetchData = useCallback(
		(data: string[]) => {
			data.forEach(el => {
				dispatch(chartPriceCoinsThunk(el))
			})
		},
		[dispatch]
	)

	const fetchDataRef = useRef(false)

	useEffect(() => {
		if (fetchDataRef.current) {
			return
		} else {
			fetchDataRef.current = true
			fetchData(testCoins)
		}
	}, [testCoins, fetchData])

	const renderChartBlock = filteredChartPriceCoins.map(
		(coin: ICoinChartData) => {
			const currentPrice = coin.info_coin.current_price
			const currentCap = coin.info_coin.market_cap
			const changePrice = coin.info_coin.price_change_percentage_24h
			return (
				<Grid key={coin.name} item sm={6} lg={6} xs={12}>
					<Grid
						className={styles.topCardItem}
						container
						sx={{
							backgroundColor: `${
								theme.palette.mode === 'light'
									? colors.primary.DEFAULT
									: colors.primary[600]
							}`,
							border: `1px solid ${colors.borderColor}`
						}}
					>
						<Grid item sm={6} lg={6} xs={12}>
							<h3 className={styles.coinName}>
								{coin.name}
								<Image
									src={coin.info_coin.image}
									alt='icon of coin'
									width={30}
									height={30}
								/>
							</h3>
							<div className={styles.coinDetails}>
								<h3 className={styles.coinPrice}>${currentPrice}</h3>
								<Box
									className={
										changePrice > 0
											? `${styles.priceTrend} ${styles.trendUp}`
											: `${styles.priceTrend} ${styles.trendDown}`
									}
									sx={{ color: `${colors.secondary.DEFAULT}` }}
								>
									{changePrice > 0 ? (
										<Image
											src={TrendUp}
											alt='icon of trend up'
											width={18}
											height={18}
										/>
									) : (
										<Image
											src={TrendDown}
											alt='icon of trend down'
											width={18}
											height={18}
										/>
									)}
									<p>{Number(changePrice).toFixed(2)} %</p>
								</Box>
							</div>
						</Grid>
						<Grid item sm={6} lg={6} xs={12} className={styles.chartContainer}>
							<AreaChart dataPrices={coin.data_price} />
						</Grid>
					</Grid>
				</Grid>
			)
		}
	)

	return (
		<Layout meta={meta}>
			<Box className={styles.box}>
				<Grid container spacing={2}>
					{renderChartBlock}
				</Grid>
			</Box>
		</Layout>
	)
}

export default Home
