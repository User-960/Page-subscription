import { Avatar, Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { useCoins } from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './SingleCoin.module.scss'
import { tokens } from '@/theme/theme'

const SingleCoin: FC = (): JSX.Element => {
	const { back } = useRouter()
	const { id } = useParams()

	const meta: IMeta = {
		title: `${id}`,
		description: `${id} page`
	}

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const coins = useCoins()

	const findCoin = coins.find(coin => coin.name === (id as string))

	return (
		<Layout meta={meta}>
			{findCoin && (
				<Grid container spacing={2} className={styles.singleCoin}>
					<Grid item xs={12} className={styles.container}>
						<Avatar src={findCoin.image} className={styles.coinIcon} />
						<Typography variant='h1' className={styles.coinName}>
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
									Capitalize ($):
								</Typography>
								<Typography
									variant='h2'
									className={
										findCoin.price_change_24h > 0
											? `${styles.coinPriceDetail} ${styles.trendUp}`
											: `${styles.coinPriceDetail} ${styles.trendDown}`
									}
								>
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
								<Typography
									variant='h2'
									className={
										findCoin.price_change_24h > 0
											? `${styles.coinPriceDetail} ${styles.trendUp}`
											: `${styles.coinPriceDetail} ${styles.trendDown}`
									}
								>
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
							onClick={() => back()}
							variant='outlined'
							color='success'
							className={styles.cardBtn}
						>
							Add to Watchlist
						</Button>
					</Grid>
				</Grid>
			)}
		</Layout>
	)
}

export default SingleCoin
