import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import {
	Box,
	Divider,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { useColorMode } from '@/components/hooks/useColorMode'

import styles from './SideBar.module.scss'
import { tokens } from '@/theme/theme'

const cn = require('clsx')

interface ISideBarProps {
	isNoneMobile: boolean
	drawerWidth: any
	isOpen: boolean
	setIsOpen: any
}

const SideBar: FC<ISideBarProps> = ({
	isNoneMobile,
	drawerWidth,
	isOpen,
	setIsOpen
}): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode: any = useColorMode()

	const [active, setActive] = useState<string>('')
	const { pathname } = useRouter()

	useEffect(() => {
		setActive(pathname.substring(1))
	}, [pathname])

	return (
		<Box component='nav'>
			{isOpen && (
				<Drawer
					open={isOpen}
					onClose={() => setIsOpen(false)}
					variant='persistent'
					anchor='left'
					sx={{
						width: drawerWidth,
						'& .MuiDrawer-paper': {
							color: theme.palette.secondary.main,
							backgroundColor: theme.palette.primary.main,
							boxSizing: 'border-box',
							width: drawerWidth
						}
					}}
				>
					<Box width='100%'>
						<div className={styles.container}>
							<Box display='flex' alignItems='center' gap='10px'>
								<Typography>Crypto</Typography>
								{!isNoneMobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<ChevronLeftOutlinedIcon />
									</IconButton>
								)}
							</Box>
						</div>
					</Box>
				</Drawer>
			)}
		</Box>
	)
}

export default SideBar
