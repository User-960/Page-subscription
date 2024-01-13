import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
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
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { useColorMode } from '@/components/hooks/useColorMode'

import Logo from '../../../assets/images/SideBar/logo.svg'

import styles from './SideBar.module.scss'
import { INavMenuItem, navMenu } from '@/mocks/navigate/Navigate'
import { tokens } from '@/theme/theme'

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
	const { pathname, push } = useRouter()

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
							<Box
								display='flex'
								alignItems='center'
								gap='10px'
								padding='30px 15px'
							>
								<Image src={Logo} alt='logo' />
								<Typography
									variant='h1'
									color={
										theme.palette.mode === 'light'
											? colors.black.DEFAULT
											: colors.white.DEFAULT
									}
								>
									Crypto
								</Typography>
								{!isNoneMobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<ChevronLeftOutlinedIcon />
									</IconButton>
								)}
							</Box>
						</div>

						<List>
							{navMenu.map((item: INavMenuItem) => (
								<ListItem key={item.id}>
									<ListItemButton onClick={() => push(item.path)}>
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText>
											<Typography>{item.name}</Typography>
										</ListItemText>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	)
}

export default SideBar
