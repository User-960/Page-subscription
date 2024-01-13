import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import {
	AppBar,
	Box,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
	useTheme
} from '@mui/material'
import React, { FC } from 'react'

import { useAppAuthSelector } from '@/components/hooks/useAppAuth'
import { useColorMode } from '@/components/hooks/useColorMode'

import styles from './TopBar.module.scss'
import { tokens } from '@/theme/theme'

interface ITopBarProps {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

const TopBar: FC<ITopBarProps> = ({ isOpen, setIsOpen }): JSX.Element => {
	const userData = useAppAuthSelector(state => state.auth.userData)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode: any = useColorMode()

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
						<Typography variant='h3'>
							Welcome, {userData?.user.firstName}
						</Typography>
						<Typography
							className={styles.dataText}
							sx={{ color: `${theme.palette.secondary.main}` }}
						>
							1 Oct. 2017 year
						</Typography>
					</Grid>
				</Box>
				<Box className={styles.panelBlock}>
					<Grid
						className={styles.panelBlockInner}
						sx={{ borderRight: `1px solid ${colors.borderColor}` }}
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

						<IconButton>
							<NotificationsNoneIcon />
						</IconButton>
					</Grid>
					<Grid
						className={styles.searchBlock}
						sx={{ backgroundColor: `${colors.primary[600]}` }}
					>
						<IconButton className={styles.iconSearch}>
							<SearchIcon />
						</IconButton>
						<InputBase className={styles.input} placeholder='Search' />
					</Grid>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default TopBar
