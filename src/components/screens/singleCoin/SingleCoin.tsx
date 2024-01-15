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
import React, { FC, useState } from 'react'

import {
	useAppDispatch,
	useCoins,
	useWatchlist
} from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './SingleCoin.module.scss'
import { createWatchlistThunk } from '@/store/thunks/watchlistThunk/watchlistThunk'
import { tokens } from '@/theme/theme'

const SingleCoin: FC = (): JSX.Element => {
	const { back } = useRouter()
	const { id } = useParams()

	const dispatch = useAppDispatch()

	const meta: IMeta = {
		title: `${id}`,
		description: `${id} page`
	}

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [severity, setSeverity] = useState<AlertColor>('success')

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const coins = useCoins()
	const watchlistArray = useWatchlist()

	const findCoin = coins.find(coin => coin.name === (id as string))

	const coinInWatchList = coins.filter(coin => {
		return watchlistArray.some((otherElement: any) => {
			return otherElement.assetId === coin.id
		})
	})

	const handleCreateRecord = () => {
		if (!coinInWatchList.find(coin => coin.name === findCoin?.name)) {
			try {
				const data = {
					name: '',
					assetId: ''
				}

				if (findCoin?.name && findCoin?.id) {
					data.name = findCoin.name
					data.assetId = findCoin.id
					dispatch(createWatchlistThunk(data))
					setSeverity('success')
					setIsOpen(true)
					setTimeout(() => {
						setIsOpen(false)
					}, 3000)
				}
			} catch (error) {
				setSeverity('error')
				setIsOpen(true)
				setTimeout(() => {
					setIsOpen(false)
				}, 3000)
			}
		}
	}

	return (
		<Layout meta={meta}>
			{findCoin && (
				<Grid container spacing={2} className={styles.singleCoin}>
					<Grid item xs={12} className={styles.container}>
						<Avatar src={findCoin.image} className={styles.coinIcon} />
						<Typography variant='h2' className={styles.coinName}>
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
									Price:
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
									Capitalize ($):
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
									Capitalize rank:
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
									Change price (%):
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
									Change price ($):
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
									Change capitalize (%):
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
									Change capitalize ($):
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
							onClick={handleCreateRecord}
							variant='outlined'
							color='success'
							className={
								coinInWatchList.find(coin => coin.name === findCoin.name)
									? `${styles.cardBtn} ${styles.btnNoActive}`
									: `${styles.cardBtn}`
							}
						>
							{coinInWatchList.find(coin => coin.name === findCoin.name)
								? 'Coin is in your Watchlist'
								: 'Add to Watchlist'}
						</Button>
					</Grid>

					<Snackbar open={isOpen} autoHideDuration={6000}>
						<Alert severity={severity} sx={{ width: '100%' }}>
							The coin has been added to your watchlist!
						</Alert>
					</Snackbar>
				</Grid>
			)}
		</Layout>
	)
}

export default SingleCoin
