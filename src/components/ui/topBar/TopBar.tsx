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

const cn = require('clsx')

const TopBar = (): JSX.Element => {
	const user = useAppAuthSelector(state => state.auth.user)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode: any = useColorMode()

	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			px='32px'
			py='24px'
		>
			<Grid>Welcome, {user?.user.firstName}</Grid>
			<Box display='flex' alignItems='center'>
				<Grid
					sx={{
						pr: '37px',
						borderRight: `1px solid ${colors.gray.DEFAULT}`
					}}
				>
					<IconButton sx={{ mr: '20px' }} onClick={colorMode.toggleColorMode}>
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
					sx={{
						display: 'flex',
						backgroundColor: `${colors.primary[600]}`,
						borderRadius: '8px',
						ml: '28px'
					}}
				>
					<IconButton className={styles.iconSearch}>
						<SearchIcon />
					</IconButton>
					<InputBase sx={{ px: '18px', py: '12px' }} placeholder='Search' />
				</Grid>
			</Box>
		</Box>
	)
}

export default TopBar
