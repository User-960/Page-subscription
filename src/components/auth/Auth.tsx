import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { useAppAuthDispatch, useAuthLogged } from '../hooks/useAppAuth'

import Layout from '../layout/Layout'
import { IMeta } from '../seo/meta.interface'

import styles from './Auth.module.scss'
import Login from './login/Login'
import Register from './register/Register'
import { AppErrors } from '@/common/errors/errors'
import AuthService from '@/services/auth.service'
import { login } from '@/store/slice/auth'

const Auth: FC = (): JSX.Element => {
	const { push, pathname } = useRouter()

	const meta: IMeta = {
		title: pathname === '/login' ? 'Login' : 'Registration',
		description: 'Enter to account'
	}

	const [email, setEmail] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)

	const [repeatPassword, setRepeatPassword] = useState<string | null>(null)
	const [firstName, setFirstName] = useState<string | null>(null)
	const [username, setUsername] = useState<string | null>(null)

	const dispatch = useAppAuthDispatch()
	const auth = useAuthLogged()

	useEffect(() => {
		if (auth) {
			push('/')
		}
	}, [auth])

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()

		if (pathname === '/login') {
			try {
				const user = await AuthService.loginUser(email, password)
				dispatch(login(user))
				push('/')
			} catch (error) {
				console.log(e)
			}
		} else {
			if (password === repeatPassword) {
				try {
					const newUser = await AuthService.createUser(
						firstName,
						username,
						email,
						password,
						repeatPassword
					)
					dispatch(login(newUser))
					push('/')
				} catch (error) {
					console.log(e)
				}
			} else {
				throw new Error(AppErrors.PasswordDoNotMatch)
			}
		}
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
						<Register
							setFirstName={setFirstName}
							setUsername={setUsername}
							setEmail={setEmail}
							setPassword={setPassword}
							setRepeatPassword={setRepeatPassword}
						/>
					) : null}
				</Box>
			</form>
		</Layout>
	)
}

export default Auth
