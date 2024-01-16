import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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

import TrendDown from '../../../assets/images/Chart/trendDown.svg'
import TrendUp from '../../../assets/images/Chart/trendUp.svg'

import styles from './TopPriceTable.module.scss'
import { ICoin } from '@/interfaces/coins.interface/coins.interface'

interface ITopPriceListProps {
	coins: ICoin[]
}

const TopPriceTable: FC<ITopPriceListProps> = ({ coins }): JSX.Element => {
	const [isSortDown, setIsSortDown] = useState<boolean | null>(null)

	const sortCoinsList = () => {
		if (isSortDown) {
			return coins.slice().sort((a, b) => a.current_price - b.current_price)
		} else if (isSortDown === null) {
			return coins
		} else {
			return coins.slice().sort((a, b) => b.current_price - a.current_price)
		}
	}

	useEffect(() => {
		sortCoinsList()
	}, [isSortDown])

	return (
		<>
			<TableContainer component={Paper} className={styles.tableContainer}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='right'>
								Price{' '}
								<button onClick={() => setIsSortDown(prev => !prev)}>
									{isSortDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
								</button>
							</TableCell>
							<TableCell align='right'>Change ($)</TableCell>
							<TableCell align='right'>Change (%)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{sortCoinsList().map((coin, index) => (
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
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default TopPriceTable
