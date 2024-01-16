import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import {
	AppBar,
	Box,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme
} from '@mui/material'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import SearchBlock from '@/components/ui/searchBlock/SearchBlock'

import {
	useAppSelector,
	useNews,
	useWatchlist
} from '@/components/hooks/useApp'
import { useCoins } from '@/components/hooks/useApp'
import { useColorMode } from '@/components/hooks/useColorMode'

import styles from './TopBar.module.scss'
import { tokens } from '@/theme/theme'

interface ITopBarProps {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

const TopBar: FC<ITopBarProps> = ({ isOpen, setIsOpen }): JSX.Element => {
	const { push, pathname } = useRouter()
	const news = useNews()
	const userAuth = useAppSelector(state => state.auth)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode: any = useColorMode()
	const coins = useCoins()
	const isNoneMobile = useMediaQuery('(min-width:720px)')

	const openNews = () => {
		if (news.length !== 0 && pathname !== '/news') {
			push('/news')
		}
	}

	return (
		<AppBar
			className={styles.appBar}
			sx={{
				background: colors.primary.DEFAULT,
				borderBottom: `1px solid ${colors.borderColor}`
			}}
		>
			<Toolbar className={styles.toolBar}>
				<Box className={styles.container}>
					<IconButton onClick={() => setIsOpen(!isOpen)}>
						<MenuOutlinedIcon className={styles.menuIcon} />
					</IconButton>
					<Grid className={styles.nameBlock}>
						<Typography variant='h3'>Welcome, {userAuth.userName}</Typography>
						<Typography
							className={styles.dataText}
							sx={{ color: `${theme.palette.secondary.main}` }}
						>
							{moment().format('MMMM Do YYYY')}
						</Typography>
					</Grid>
				</Box>
				<Box className={styles.panelBlock}>
					<Grid
						className={styles.panelBlockInner}
						sx={{
							borderRight: isNoneMobile
								? `1px solid ${colors.borderColor}`
								: 'none'
						}}
					>
						<IconButton
							className={styles.iconTheme}
							onClick={colorMode.toggleColorMode}
						>
							{theme.palette.mode === 'dark' ? (
								<DarkModeIcon />
							) : (
								<LightModeIcon />
							)}
						</IconButton>

						<IconButton onClick={openNews}>
							<NotificationsNoneIcon />
							{news.length !== 0 && pathname !== '/news' && (
								<div className={styles.notiRed}></div>
							)}
						</IconButton>
					</Grid>

					{isNoneMobile && coins && <SearchBlock />}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default TopBar
