import {
	Alert,
	AlertColor,
	Box,
	Button,
	Grid,
	Snackbar,
	useTheme
} from '@mui/material'
import Image from 'next/image'
import React, {
	FC,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'

import AreaChart from '@/components/ui/charts/areaChart/AreaChart'
import LineChart from '@/components/ui/charts/lineChart/LineChart'
import ErrorBlock from '@/components/ui/errorBlock/ErrorBlock'
import TopPriceTable from '@/components/ui/topPriceTable/TopPriceTable'

import {
	useAppDispatch,
	useChartPriceCoins,
	useCoins,
	useCoinsFavorite,
	useWatchlist
} from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import TrendDown from '../../../assets/images/Chart/trendDown.svg'
import TrendUp from '../../../assets/images/Chart/trendUp.svg'

import styles from './Home.module.scss'
import {
	ICoin,
	ICoinChartData
} from '@/interfaces/coins.interface/coins.interface'
import { coinsMock } from '@/mocks/coins/coins'
import {
	chartPriceCoinsThunk,
	favoriteCoinsThunk,
	getTopPriceThunk
} from '@/store/thunks/coinsThunk/coinsThunk'
import { tokens } from '@/theme/theme'

const Home: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Home',
		description: 'Home page'
	}

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const areaChartCoins = useMemo(
		() => [coinsMock.firstCoin, coinsMock.secondCoin],
		[]
	)

	const coins = useCoins()
	const chartPriceCoins = useChartPriceCoins()
	const dispatch = useAppDispatch()

	const filteredChartPriceCoins = chartPriceCoins.filter(
		(value: ICoinChartData, index: number, self: ICoinChartData[]) =>
			index === self.findIndex(t => t.name === value.name)
	)

	// Pagination
	const [currentPage] = useState<number>(1)
	const [coinsPerPage, setCoinsPerPage] = useState<number>(10)

	const lastCoinIndex = currentPage * coinsPerPage
	const firstCoinIndex = lastCoinIndex - coinsPerPage
	const currentCoins = coins?.slice(firstCoinIndex, lastCoinIndex)

	const nextCoins = () => setCoinsPerPage(prev => prev + 10)
	// ----

	// Coin add in watchlist
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [severity, setSeverity] = useState<AlertColor>('success')
	const watchlist = useWatchlist()

	const addCoinInWatchlist = () => {
		setSeverity('success')
		setTimeout(() => {
			setIsOpen(false)
		}, 2000)
	}

	useEffect(() => {
		if (isOpen) {
			addCoinInWatchlist()
		}
	}, [watchlist])
	// ----

	const fetchAreaChartCoins = useCallback(
		(dataCoins: string[]) => {
			dataCoins.forEach(coin => {
				dispatch(chartPriceCoinsThunk(coin))
			})
		},
		[dispatch]
	)

	const fetchAreaChartCoinsRef = useRef(false)

	useEffect(() => {
		if (fetchAreaChartCoinsRef.current) {
			console.log('No request for coins №1')
			return
		} else {
			if (chartPriceCoins.length === 0 && coins.length === 0) {
				console.log('Request for favorites coins №2')
				fetchAreaChartCoinsRef.current = true
				fetchAreaChartCoins(areaChartCoins)

				console.log('Request for list coins №3')
				dispatch(getTopPriceThunk(''))
			} else {
				console.log('No request for coins №4')
				return
			}
		}
	}, [areaChartCoins, fetchAreaChartCoins, dispatch, chartPriceCoins, coins])

	const renderChartBlock =
		filteredChartPriceCoins.length === 0 ? (
			<ErrorBlock />
		) : (
			filteredChartPriceCoins.map((coin: ICoinChartData) => {
				const currentPrice = coin.info_coin.current_price
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
							<Grid
								item
								sm={6}
								lg={6}
								xs={12}
								className={styles.chartContainer}
							>
								<AreaChart
									dataPrices={coin.data_price}
									changePrice={changePrice}
								/>
							</Grid>
						</Grid>
					</Grid>
				)
			})
		)

	return (
		<Layout meta={meta}>
			<Box className={styles.box}>
				<Grid container spacing={2} className={styles.areaChart}>
					{renderChartBlock}
				</Grid>

				<Grid
					container
					className={styles.lineChartBlock}
					sx={{
						backgroundColor: `${
							theme.palette.mode === 'light'
								? colors.primary.DEFAULT
								: colors.primary[600]
						}`,
						border: `1px solid ${colors.borderColor}`
					}}
				>
					<Grid item xs={12} sm={12} lg={12}>
						{filteredChartPriceCoins.length === 0 ? (
							<ErrorBlock />
						) : (
							<LineChart data={filteredChartPriceCoins} />
						)}
					</Grid>
				</Grid>

				<Grid
					container
					className={styles.topListTable}
					sx={{
						backgroundColor: `${
							theme.palette.mode === 'light'
								? colors.primary.DEFAULT
								: colors.primary[600]
						}`,
						border: `1px solid ${colors.borderColor}`
					}}
				>
					<Grid item xs={12} sm={12} lg={12} className={styles.tableContainer}>
						<TopPriceTable
							coins={currentCoins}
							setIsOpenSnackbar={() => setIsOpen(true)}
						/>

						{coins.length > 10 && coinsPerPage <= currentCoins.length && (
							<Button
								onClick={() => nextCoins()}
								variant='contained'
								sx={{
									margin: '15px auto',
									width: '160px',
									backgroundColor: '#1900d5 !important'
								}}
							>
								Next Coins
							</Button>
						)}
					</Grid>
				</Grid>

				<Snackbar open={isOpen} autoHideDuration={6000}>
					<Alert severity={severity} sx={{ width: '100%' }}>
						The coin has been added to your watchlist!
					</Alert>
				</Snackbar>
			</Box>
		</Layout>
	)
}

export default Home
