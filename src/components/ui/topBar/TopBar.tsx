import { Box, Grid } from '@mui/material'
import React from 'react'

import { useAppAuthSelector } from '@/components/hooks/useAppAuth'

import styles from './TopBar.module.scss'

const cn = require('clsx')

const TopBar = (): JSX.Element => {
	const user = useAppAuthSelector(state => state.auth.user)
	return (
		<Box display='flex' justifyContent='space-between' px='32px' py='24px'>
			<Grid>Welcome, {user?.user.firstName}</Grid>
		</Box>
	)
}

export default TopBar
