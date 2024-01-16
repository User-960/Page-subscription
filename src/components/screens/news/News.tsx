import { Box, Grid, Link, Typography, useTheme } from '@mui/material'
import React, { FC, useEffect } from 'react'

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

	const renderNewsBlock = filteredNews.map(element => (
		<Grid
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
				<Grid>{renderNewsBlock}</Grid>
			</Grid>
		</Layout>
	)
}

export default News
