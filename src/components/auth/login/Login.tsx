import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import styles from './Login.module.scss'

interface ILoginProps<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any
> {
	register: UseFormRegister<TFieldValues | any>
	errors: FieldErrors<FieldValues>
}

const Login: FC<ILoginProps> = ({ register, errors }): JSX.Element => {
	const { push } = useRouter()

	return (
		<>
			<Typography
				variant='h3'
				fontSize={32}
				fontWeight={700}
				textAlign='center'
			>
				Sign in
			</Typography>

			<Typography
				variant='body1'
				padding={3}
				fontWeight={300}
				textAlign='center'
				marginBottom={3}
			>
				Type your email and password
			</Typography>

			<TextField
				error={!!errors.email}
				helperText={errors.email ? `${errors.email.message}` : ''}
				margin='normal'
				fullWidth={true}
				label='Email'
				variant='outlined'
				placeholder='Type your email'
				{...register('email')}
			/>
			<TextField
				error={!!errors.password}
				helperText={errors.password ? `${errors.password.message}` : ''}
				type='password'
				margin='normal'
				fullWidth={true}
				label='Password'
				variant='outlined'
				placeholder='Type your password'
				{...register('password')}
			/>

			<Button
				type='submit'
				variant='contained'
				sx={{
					marginTop: 2,
					marginBottom: 1,
					width: '60%',
					backgroundColor: '#1900d5 !important'
				}}
			>
				Sign in
			</Button>

			<Typography
				variant='body1'
				padding={3}
				fontFamily={'Poppins'}
				fontWeight={300}
				textAlign='center'
			>
				Do not you have an account?
				<span
					className={styles.questionRegist}
					onClick={() => push('/register')}
				>
					Registration
				</span>
			</Typography>
		</>
	)
}

export default Login
