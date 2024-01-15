import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import React from 'react'

export interface INavMenuItem {
	id: number
	name: string
	icon: any
	path: string
}

export const navMenu: INavMenuItem[] = [
	{
		id: 1,
		name: 'Home',
		icon: <HomeOutlinedIcon />,
		path: '/'
	},
	{
		id: 2,
		name: 'Favorites',
		icon: <AutoGraphOutlinedIcon />,
		path: '/watchlist'
	}
	// {
	// 	id: 3,
	// 	name: 'News',
	// 	icon: <MenuBookOutlinedIcon />,
	// 	path: '/news'
	// },
	// {
	// 	id: 4,
	// 	name: 'Settings',
	// 	icon: <SettingsOutlinedIcon />,
	// 	path: '/settings'
	// }
]
