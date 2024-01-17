import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StarIcon from '@mui/icons-material/Star'
import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from '@mui/material'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import { useAppDispatch, useWatchlist } from '@/components/hooks/useApp'

import ErrorBlock from '../errorBlock/ErrorBlock'

import styles from './TopPriceTable.module.scss'
import { ICoin } from '@/interfaces/coins.interface/coins.interface'
import { IWatchlist } from '@/interfaces/watchlist.interface/watchlist.interface'
import { deleteCoin, saveCoin } from '@/store/slice/watchlist/watchlistSlice'

const cn = require('clsx')
interface ITopPriceListProps {
	coins: ICoin[]
	setIsOpenSnackbar?: () => void
}

const TopPriceTable: FC<ITopPriceListProps> = ({
	coins,
	setIsOpenSnackbar = () => null
}): JSX.Element => {
	const watchlist = useWatchlist()
	const dispatch = useAppDispatch()
	const [isSortDownPrice, setIsSortDownPrice] = useState<boolean | null>(null)
	const [isSortDownDollars, setIsSortDownDollars] = useState<boolean | null>(
		null
	)
	const [isSortDownPercent, setIsSortDownPercent] = useState<boolean | null>(
		null
	)

	const [sortType, setSortType] = useState<
		'price' | 'dollars' | 'percent' | null
	>(null)

	const sortCoinsPriceList = () => {
		if (sortType === 'price') {
			if (isSortDownPrice) {
				return coins.slice().sort((a, b) => a.current_price - b.current_price)
			} else if (isSortDownPrice === null) {
				return coins
			} else {
				return coins.slice().sort((a, b) => b.current_price - a.current_price)
			}
		}

		if (sortType === 'dollars') {
			if (isSortDownDollars) {
				return coins
					.slice()
					.sort((a, b) => a.price_change_24h - b.price_change_24h)
			} else if (isSortDownDollars === null) {
				return coins
			} else {
				return coins
					.slice()
					.sort((a, b) => b.price_change_24h - a.price_change_24h)
			}
		}

		if (sortType === 'percent') {
			if (isSortDownPercent) {
				return coins
					.slice()
					.sort(
						(a, b) =>
							a.price_change_percentage_24h - b.price_change_percentage_24h
					)
			} else if (isSortDownPercent === null) {
				return coins
			} else {
				return coins
					.slice()
					.sort(
						(a, b) =>
							b.price_change_percentage_24h - a.price_change_percentage_24h
					)
			}
		}

		return coins
	}

	useEffect(() => {
		sortCoinsPriceList()
	}, [isSortDownPrice])

	const findCoinWatchlist = (data: IWatchlist) => {
		const findCoin = watchlist.find(coin => coin.assetId === data.assetId)
		return findCoin ? true : false
	}

	const saveCoinWatchlist = (data: IWatchlist) => {
		const findCoin = findCoinWatchlist(data)

		if (findCoin) {
			dispatch(deleteCoin(data.assetId))
		} else {
			setIsOpenSnackbar()
			dispatch(saveCoin(data))
		}
	}

	return (
		<>
			<TableContainer component={Paper} className={styles.tableContainer}>
				{coins.length !== 0 ? (
					<Table sx={{ minWidth: 650 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>

								<TableCell align='right'>
									Price{' '}
									<button
										onClick={() => {
											setSortType('price')
											setIsSortDownPrice(prev => !prev)
										}}
									>
										{isSortDownPrice ? <ExpandLessIcon /> : <ExpandMoreIcon />}
									</button>
								</TableCell>

								<TableCell align='right' sx={{ padding: '10px' }}>
									Change ($){' '}
									<button
										onClick={() => {
											setSortType('dollars')
											setIsSortDownDollars(prev => !prev)
										}}
									>
										{isSortDownDollars ? (
											<ExpandLessIcon />
										) : (
											<ExpandMoreIcon />
										)}
									</button>
								</TableCell>

								<TableCell align='right' sx={{ padding: '10px' }}>
									Change (%){''}
									<button
										onClick={() => {
											setSortType('percent')
											setIsSortDownPercent(prev => !prev)
										}}
									>
										{isSortDownPercent ? (
											<ExpandLessIcon />
										) : (
											<ExpandMoreIcon />
										)}
									</button>
								</TableCell>

								<TableCell align='right'></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{sortCoinsPriceList().map((coin, index) => (
								<TableRow
									key={coin.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component='th' scope='row'>
										<p className={styles.cellName}>
											<span>{index + 1}.</span>
											<Image
												src={coin.image}
												width={19}
												height={19}
												className={styles.cellImage}
												alt={coin.name}
											/>{' '}
											{coin.name}
										</p>
									</TableCell>
									<TableCell align='right'>{coin.current_price}</TableCell>
									<TableCell align='right'>
										<Box
											className={
												coin.price_change_24h > 0
													? `${styles.trendUp}`
													: `${styles.trendDown}`
											}
										>
											<p>{coin.price_change_24h.toFixed(2)}</p>
										</Box>
									</TableCell>
									<TableCell align='right'>
										<Box
											className={
												coin.price_change_percentage_24h > 0
													? `${styles.trendUp}`
													: `${styles.trendDown}`
											}
										>
											<p>{coin.price_change_percentage_24h.toFixed(2)}</p>
										</Box>
									</TableCell>

									<TableCell align='right'>
										<StarIcon
											className={styles.starIcon}
											sx={{
												color: findCoinWatchlist({
													assetId: coin.id,
													name: coin.name,
													user: 11
												})
													? '#ef8e19'
													: '#737373'
											}}
											onClick={() =>
												saveCoinWatchlist({
													assetId: coin.id,
													name: coin.name,
													user: 11
												})
											}
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				) : (
					<Box>
						<ErrorBlock />
					</Box>
				)}
			</TableContainer>
		</>
	)
}

export default TopPriceTable
