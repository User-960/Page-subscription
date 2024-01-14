import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import {
	Box,
	Drawer,
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

import { useAppAuthDispatch } from '../../hooks/useAppAuth'

import Logo from '../../../assets/images/SideBar/logo.svg'

import styles from './SideBar.module.scss'
import { INavMenuItem, navMenu } from '@/mocks/navigate/Navigate'
import { logout } from '@/store/slice/auth/authSlice'
import { tokens } from '@/theme/theme'

const cn = require('clsx')

interface ISideBarProps {
	isNoneMobile: boolean
	drawerWidth: string
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

const SideBar: FC<ISideBarProps> = ({
	isNoneMobile,
	drawerWidth,
	isOpen,
	setIsOpen
}): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const [active, setActive] = useState<string>('')
	const { pathname, push } = useRouter()

	const dispatch = useAppAuthDispatch()

	const logOutFunc = () => {
		dispatch(logout())
		push('/login')
	}

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
							width: drawerWidth,
							borderRight: `1px solid ${colors.borderColor}`
						}
					}}
				>
					<Box
						className={styles.navBlock}
						sx={{ borderBottom: `1px solid ${colors.borderColor}` }}
					>
						<div className={styles.container}>
							<Box className={styles.brand} onClick={() => push('/')}>
								<Image src={Logo} alt='logo' className={styles.logo} />
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

						<List className={styles.list}>
							{navMenu.map((item: INavMenuItem) => (
								<ListItem key={item.id}>
									<ListItemButton
										className={cn(styles.navItemBtn, {
											[styles.navItemBtnActive]: pathname === item.path
										})}
										onClick={() => push(item.path)}
									>
										<ListItemIcon className={styles.iconNavItem}>
											{item.icon}
										</ListItemIcon>
										<ListItemText>
											<Typography>{item.name}</Typography>
										</ListItemText>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>

					<Box className={styles.logoutBlock}>
						<List>
							<ListItem>
								<ListItemButton
									className={styles.navItemBtn}
									onClick={() => logOutFunc()}
								>
									<ListItemIcon>
										<LogoutOutlinedIcon />
									</ListItemIcon>
									<ListItemText>
										<Typography>Logout</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	)
}

export default SideBar
