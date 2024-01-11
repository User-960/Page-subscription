import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Layout from '../layout/Layout'
import { IMeta } from '../seo/meta.interface'

import styles from './Auth.module.scss'
import Login from './login/Login'
import Register from './register/Register'

const Auth: FC = () => {
	const { pathname } = useRouter()

	const meta: IMeta = {
		title: pathname === '/login' ? 'Логин' : 'Регистрация',
		description: 'Enter to account'
	}

	return (
		<Layout meta={meta}>
			<div className={styles.form}>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					maxWidth={640}
					width={'80%'}
					margin='auto'
					padding={5}
					borderRadius={5}
					boxShadow={'5px 5px 10px #ccc'}
				>
					{pathname === '/login' ? (
						<Login />
					) : pathname === '/register' ? (
						<Register />
					) : null}
				</Box>
			</div>
		</Layout>
	)
}

export default Auth
