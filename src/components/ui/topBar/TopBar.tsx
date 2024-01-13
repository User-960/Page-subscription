import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material'
import React from 'react'

import { useAppAuthSelector } from '@/components/hooks/useAppAuth'
import { useColorMode } from '@/components/hooks/useColorMode'

import styles from './TopBar.module.scss'
import { tokens } from '@/theme/theme'

const TopBar = (): JSX.Element => {
	const userData = useAppAuthSelector(state => state.auth.userData)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode: any = useColorMode()

	return (
		<Box
			className={styles.container}
			sx={{
				backgroundColor: colors.primary.DEFAULT,
				borderBottom: `1px solid ${colors.borderColor}`
			}}
		>
			<Grid>Welcome, {userData?.user.firstName}</Grid>
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
		</Box>
	)
}

export default TopBar
