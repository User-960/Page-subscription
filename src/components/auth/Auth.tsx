import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import Layout from '../layout/Layout'
import { IMeta } from '../seo/meta.interface'

import styles from './Auth.module.scss'
import Login from './login/Login'
import Register from './register/Register'
import AuthService from '@/services/auth.service'

const Auth: FC = () => {
	const [email, setEmail] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)

	const { pathname } = useRouter()

	const meta: IMeta = {
		title: pathname === '/login' ? 'Логин' : 'Регистрация',
		description: 'Enter to account'
	}

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		const user = AuthService.loginUser(email, password)
	}

	return (
		<Layout meta={meta}>
			<form className={styles.form} onSubmit={handleSubmit}>
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
						<Login setEmail={setEmail} setPassword={setPassword} />
					) : pathname === '/register' ? (
						<Register />
					) : null}
				</Box>
			</form>
		</Layout>
	)
}

export default Auth
