import {
	Alert,
	AlertColor,
	Avatar,
	Box,
	Button,
	Grid,
	Snackbar,
	Typography,
	useTheme
} from '@mui/material'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import {
	useAppDispatch,
	useCoins,
	useWatchlist
} from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './SingleCoin.module.scss'
import { IWatchlist } from '@/interfaces/watchlist.interface/watchlist.interface'
import { deleteCoin, saveCoin } from '@/store/slice/watchlist/watchlistSlice'
import { createWatchlistThunk } from '@/store/thunks/watchlistThunk/watchlistThunk'
import { tokens } from '@/theme/theme'

const SingleCoin: FC = (): JSX.Element => {
	const { back } = useRouter()

	const params = useParams()
	const id: string | string[] = params?.id

	const dispatch = useAppDispatch()

	const meta: IMeta = {
		title: `${id}`,
		description: `${id} page`
	}

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const coins = useCoins()
	const watchlistArray = useWatchlist()

	const findCoin = coins.find(coin => coin.name === id)

	const coinInWatchList = coins.filter(coin => {
		return watchlistArray.some((otherElement: any) => {
			return otherElement.assetId === coin.id
		})
	})

	// Coin add in watchlist
	const findCoinWatchlist = (data: IWatchlist) => {
		const findCoin = watchlist.find(
			(coin: IWatchlist) => coin.assetId === data.assetId
		)
		return findCoin ? true : false
	}

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [severity, setSeverity] = useState<AlertColor>('info')
	const watchlist = useWatchlist()

	const saveCoinWatchlist = (data: IWatchlist) => {
		const findCoin = findCoinWatchlist(data)

		if (findCoin) {
			dispatch(deleteCoin(data.assetId))
		} else {
			dispatch(saveCoin(data))
		}
	}

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

	// const handleCreateRecord = () => {
	// 	if (!coinInWatchList.find(coin => coin.name === findCoin?.name)) {
	// 		try {
	// 			const data = {
	// 				name: '',
	// 				assetId: ''
	// 			}

	// 			if (findCoin?.name && findCoin?.id) {
	// 				data.name = findCoin.name
	// 				data.assetId = findCoin.id
	// 				dispatch(createWatchlistThunk(data))
	// 				setSeverity('success')
	// 				setIsOpen(true)
	// 				setTimeout(() => {
	// 					setIsOpen(false)
	// 				}, 3000)
	// 			}
	// 		} catch (error) {
	// 			setSeverity('error')
	// 			setIsOpen(true)
	// 			setTimeout(() => {
	// 				setIsOpen(false)
	// 			}, 3000)
	// 		}
	// 	}
	// }

	return (
		<Layout meta={meta}>
			{findCoin && (
				<Grid container spacing={2} className={styles.singleCoin}>
					<Grid item xs={12} className={styles.container}>
						<Avatar src={findCoin.image} className={styles.coinIcon} />
						<Typography
							variant='h2'
							className={styles.coinName}
							sx={{ marginTop: '20px', marginBottom: '20px' }}
						>
							{findCoin.name}
						</Typography>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							{
								<Box className={styles.container}>
									<Typography variant='h2' className={styles.coinSymbol}>
										{findCoin.symbol.toUpperCase()}
									</Typography>
								</Box>
							}
						</Grid>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							<Box className={styles.container}>
								<Typography variant='body1' className={styles.coinTitle}>
									<span>Price:</span>
								</Typography>
								<Typography variant='h2' className={styles.coinPriceDetail}>
									{findCoin.current_price.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD'
									})}
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							<Box className={styles.container}>
								<Typography variant='body1' className={styles.coinTitle}>
									<span>Capitalize ($):</span>
								</Typography>
								<Typography variant='h2' className={styles.coinPriceDetail}>
									{findCoin.market_cap.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD'
									})}
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							<Box className={styles.container}>
								<Typography variant='body1' className={styles.coinTitle}>
									<span>Capitalize rank:</span>
								</Typography>
								<Typography variant='h2' className={styles.coinPriceDetail}>
									{findCoin.market_cap_rank}
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							<Box className={styles.container}>
								<Typography variant='body1' className={styles.coinTitle}>
									<span>Change price (%):</span>
								</Typography>
								<Typography
									variant='h2'
									className={
										findCoin.price_change_percentage_24h > 0
											? `${styles.coinPriceDetail} ${styles.trendUp}`
											: `${styles.coinPriceDetail} ${styles.trendDown}`
									}
								>
									{findCoin.price_change_percentage_24h}
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							<Box className={styles.container}>
								<Typography variant='body1' className={styles.coinTitle}>
									<span>Change price ($):</span>
								</Typography>
								<Typography
									variant='h2'
									className={
										findCoin.price_change_24h > 0
											? `${styles.coinPriceDetail} ${styles.trendUp}`
											: `${styles.coinPriceDetail} ${styles.trendDown}`
									}
								>
									{findCoin.price_change_24h}
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							<Box className={styles.container}>
								<Typography variant='body1' className={styles.coinTitle}>
									<span>Change capitalize (%):</span>
								</Typography>
								<Typography
									variant='h2'
									className={
										findCoin.price_change_24h > 0
											? `${styles.coinPriceDetail} ${styles.trendUp}`
											: `${styles.coinPriceDetail} ${styles.trendDown}`
									}
								>
									{findCoin.market_cap_change_percentage_24h}
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid item sm={6} xs={12} className={styles.card}>
						<Grid
							className={styles.cardItem}
							sx={{
								backgroundColor: `${
									theme.palette.mode === 'light'
										? colors.primary.DEFAULT
										: colors.primary[600]
								}`,
								border: `1px solid ${colors.borderColor}`
							}}
						>
							<Box className={styles.container}>
								<Typography variant='body1' className={styles.coinTitle}>
									<span>Change capitalize ($):</span>
								</Typography>
								<Typography
									variant='h2'
									className={
										findCoin.price_change_24h > 0
											? `${styles.coinPriceDetail} ${styles.trendUp}`
											: `${styles.coinPriceDetail} ${styles.trendDown}`
									}
								>
									{findCoin.market_cap_change_24h.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD'
									})}
								</Typography>
							</Box>
						</Grid>
					</Grid>

					<Grid
						container
						justifyContent='center'
						className={styles.cardBtnBlock}
					>
						<Button
							onClick={() => back()}
							variant='outlined'
							color='success'
							className={styles.cardBtn}
						>
							Go back
						</Button>

						<Button
							onClick={() => {
								saveCoinWatchlist({
									assetId: findCoin.id,
									name: findCoin.name,
									user: 11
								})
								setIsOpen(true)
							}}
							variant='outlined'
							color='success'
							className={
								coinInWatchList.find(coin => coin.name === findCoin.name)
									? `${styles.cardBtn} ${styles.btnNoActive}`
									: `${styles.cardBtn}`
							}
						>
							{coinInWatchList.find(coin => coin.name === findCoin.name)
								? 'Delete coin from Watchlist'
								: 'Add to Watchlist'}
						</Button>
					</Grid>

					<Snackbar open={isOpen} autoHideDuration={6000}>
						<Alert severity={severity} sx={{ width: '100%' }}>
							{coinInWatchList.find(coin => coin.name === findCoin.name)
								? 'The coin has been added to your watchlist!'
								: 'The coin has been deleted from your watchlist!'}
						</Alert>
					</Snackbar>
				</Grid>
			)}
		</Layout>
	)
}

export default SingleCoin
