import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAppAuthDispatch, useAuthLogged } from '../hooks/useAppAuth'

import Layout from '../layout/Layout'
import { IMeta } from '../seo/meta.interface'

import styles from './Auth.module.scss'
import Login from './login/Login'
import Register from './register/Register'
import { AppErrors } from '@/common/errors/errors'
import AuthService from '@/services/auth.service'
import { login } from '@/store/slice/auth/authSlice'
import { loginSchema, registerSchema } from '@/utils/authSchema/authSchema'

const Auth: FC = (): JSX.Element => {
	const { push, pathname } = useRouter()

	const meta: IMeta = {
		title: pathname === '/login' ? 'Login' : 'Registration',
		description: 'Enter to account'
	}

	const dispatch = useAppAuthDispatch()
	const auth = useAuthLogged()

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({
		resolver: yupResolver(pathname === '/login' ? loginSchema : registerSchema)
	})

	useEffect(() => {
		if (auth) {
			push('/')
		}
	}, [auth])

	const handleSubmitForm = async (data: any) => {
		if (pathname === '/login') {
			try {
				const user = await AuthService.loginUser(data.email, data.password)
				dispatch(login(user))
				push('/')
			} catch (error) {
				console.log(error)
			}
		} else {
			if (data.password === data.repeatPassword) {
				try {
					const newUser = await AuthService.createUser(
						data.firstName,
						data.username,
						data.email,
						data.password,
						data.repeatPassword
					)
					dispatch(login(newUser))
					push('/')
				} catch (error) {
					console.log(error)
				}
			} else {
				throw new Error(AppErrors.PasswordDoNotMatch)
			}
		}
	}

	return (
		<Layout meta={meta}>
			<form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
				<Box className={styles.container} padding={4} borderRadius={5}>
					{pathname === '/login' ? (
						<Login register={register} errors={errors} />
					) : pathname === '/register' ? (
						<Register register={register} errors={errors} />
					) : null}
				</Box>
			</form>
		</Layout>
	)
}

export default Auth
