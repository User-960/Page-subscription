import {
	Button,
	Grid,
	Typography,
	useTheme
} from '@mui/material'
import React, { FC, useEffect, useState } from 'react'

import TopPriceTable from '@/components/ui/topPriceTable/TopPriceTable'

import {
	useAppDispatch,
	useCoins,
	useWatchlist
} from '@/components/hooks/useApp'

import Layout from '../../layout/Layout'
import { IMeta } from '../../seo/meta.interface'

import styles from './Watchlist.module.scss'
import { getTopPriceThunk } from '@/store/thunks/coinsThunk/coinsThunk'
import { getAllWatchlistThunk } from '@/store/thunks/watchlistThunk/watchlistThunk'
import { tokens } from '@/theme/theme'

const Watchlist: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Watchlist',
		description: 'Watchlist page'
	}

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const dispatch = useAppDispatch()

	const watchlistArray = useWatchlist()
	const coins = useCoins()

	// Pagination
	const [currentPage] = useState<number>(1)
	const [coinsPerPage, setCoinsPerPage] = useState<number>(10)

	const lastCoinIndex = currentPage * coinsPerPage
	const firstCoinIndex = lastCoinIndex - coinsPerPage
	const currentCoins = coins?.slice(firstCoinIndex, lastCoinIndex)

	const nextCoins = () => setCoinsPerPage(prev => prev + 10)
	// ----

	useEffect(() => {
		if (coins.length === 0) {
			console.log(5)
			dispatch(getTopPriceThunk(''))
		}

		// if (watchlistArray.length === 0) {
		// 	console.log(6)
		// 	dispatch(getAllWatchlistThunk(''))
		// }

		dispatch(getAllWatchlistThunk(''))
	}, [dispatch])

	const filteredArray = coins.filter(coin => {
		return watchlistArray.some((otherElement: any) => {
			return otherElement.assetId === coin.id
		})
	})

	return (
		<Layout meta={meta}>
			<Grid item xs={12} className={styles.container}>
				<Typography variant='h2' className={styles.watchlistName}>
					My Watchlist
				</Typography>
			</Grid>

			{filteredArray.length === 0 ? (
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
					<p className={styles.warning}>Your watchlist is empty!</p>
				</Grid>
			) : (
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
						<TopPriceTable coins={filteredArray} />

						{filteredArray.length > 10 && (
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
			)}
		</Layout>
	)
}

export default Watchlist
