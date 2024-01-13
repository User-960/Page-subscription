import LoadingButton from '@mui/lab/LoadingButton'
import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { Dispatch, FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import styles from './Register.module.scss'

interface IRegisterProps<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any
> {
	register: UseFormRegister<TFieldValues | any>
	errors: FieldErrors<FieldValues>
	isLoading: boolean
}

const Register: FC<IRegisterProps> = ({
	register,
	errors,
	isLoading
}): JSX.Element => {
	const { push } = useRouter()

	return (
		<>
			<Typography
				variant='h3'
				fontSize={32}
				fontWeight={700}
				textAlign='center'
			>
				Registration
			</Typography>

			<Typography
				variant='body1'
				padding={3}
				fontWeight={300}
				textAlign='center'
				marginBottom={2}
			>
				Enter your registration details
			</Typography>

			<TextField
				error={!!errors.firstName}
				helperText={errors.firstName ? `${errors.firstName.message}` : ''}
				margin='normal'
				fullWidth={true}
				label='First name'
				variant='outlined'
				placeholder='Type your first name'
				{...register('firstName')}
			/>
			<TextField
				error={!!errors.username}
				helperText={errors.username ? `${errors.username.message}` : ''}
				margin='normal'
				fullWidth={true}
				label='Username'
				variant='outlined'
				placeholder='Type your username'
				{...register('username')}
			/>
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
			<TextField
				error={!!errors.repeatPassword}
				helperText={
					errors.repeatPassword ? `${errors.repeatPassword.message}` : ''
				}
				type='password'
				margin='normal'
				fullWidth={true}
				label='Repeat password'
				variant='outlined'
				placeholder='Repeat your password'
				{...register('repeatPassword')}
			/>

			{isLoading ? (
				<LoadingButton
					loading={true}
					variant='contained'
					sx={{
						marginTop: 2,
						marginBottom: 1,
						width: '60%',
						backgroundColor: '#1900d5 !important'
					}}
				>
					-
				</LoadingButton>
			) : (
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
					Register
				</Button>
			)}

			<Typography
				variant='body1'
				padding={3}
				fontFamily={'Poppins'}
				fontWeight={300}
				textAlign='center'
			>
				Do you have an account?
				<span className={styles.questionLogin} onClick={() => push('/login')}>
					Login
				</span>
			</Typography>
		</>
	)
}

export default Register
