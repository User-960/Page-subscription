import { Box, Button, Grid, Link, Typography, useTheme } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'

import ErrorBlock from '@/components/ui/errorBlock/ErrorBlock'

import { useAppDispatch, useNews } from '@/components/hooks/useApp'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './News.module.scss'
import { getNews } from '@/store/thunks/newsThink/newsThunk'
import { tokens } from '@/theme/theme'

const News: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'News',
		description: 'News page'
	}

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const dispatch = useAppDispatch()
	const news = useNews()

	useEffect(() => {
		dispatch(getNews(''))
	}, [])

	const filteredNews = news.filter(element => element.body.length < 500)

	// Pagination
	const [currentPage] = useState<number>(1)
	const [newsPerPage, setNewsPerPage] = useState<number>(10)

	const lastNewsIndex = currentPage * newsPerPage
	const firstNewsIndex = lastNewsIndex - newsPerPage
	const currentNews = filteredNews?.slice(firstNewsIndex, lastNewsIndex)

	const nextCoins = () => setNewsPerPage(prev => prev + 10)
	// ----

	const renderNewsBlock = currentNews.map(element => (
		<Grid
			key={element.id}
			className={styles.newsBlock}
			sx={{
				backgroundColor: `${
					theme.palette.mode === 'light'
						? colors.primary.DEFAULT
						: colors.primary[600]
				}`,
				border: `1px solid ${colors.borderColor}`
			}}
		>
			<Grid item xs={12} md={3}>
				<img src={element.imageurl} alt={element.categories} />
			</Grid>

			<Grid item xs={12} md={9} className={styles.newsContent}>
				<Box className={styles.newsTitle}>
					<Typography variant='body1'>{element.title}</Typography>
				</Box>

				<Box className={styles.newsCategories}>
					<Typography variant='body1'>
						Categories: <span>{element.categories}</span>
					</Typography>
				</Box>

				<Box className={styles.newsText}>
					<Typography variant='body1'>{element.body}</Typography>
				</Box>

				<Box className={styles.readMore}>
					<Typography variant='h4'>
						<Link
							href={element.url}
							sx={{
								color: `${
									theme.palette.mode === 'light'
										? colors.black.DEFAULT
										: colors.white.DEFAULT
								}`
							}}
						>
							Read more
						</Link>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	))

	return (
		<Layout meta={meta}>
			<Grid className={styles.newsBlockContainer}>
				<Grid className={styles.blockTitle}>
					<Typography variant='h2'>News</Typography>
				</Grid>

				{news.length === 0 ? (
					<Grid container>
						<Grid
							item
							xs={12}
							sm={12}
							lg={12}
							className={styles.newsBlockError}
						>
							<ErrorBlock />
						</Grid>
					</Grid>
				) : (
					<>
						<Grid>{renderNewsBlock}</Grid>
						<Grid className={styles.blockBtn}>
							{filteredNews.length > 10 &&
								newsPerPage <= currentNews.length && (
									<Button
										onClick={() => nextCoins()}
										variant='contained'
										sx={{
											margin: '15px auto',
											width: '160px',
											backgroundColor: '#1900d5 !important'
										}}
									>
										Next News
									</Button>
								)}
						</Grid>
					</>
				)}
			</Grid>
		</Layout>
	)
}

export default News
