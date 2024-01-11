import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './Login.module.scss'

const Login = () => {
	const { push } = useRouter()

	return (
		<>
			<Typography
				variant='h3'
				fontFamily={'Poppins'}
				fontWeight={700}
				textAlign='center'
			>
				Sign in
			</Typography>

			<Typography
				variant='body1'
				padding={3}
				fontFamily={'Poppins'}
				fontWeight={300}
				textAlign='center'
				marginBottom={3}
			>
				Type your login and password
			</Typography>

			<TextField
				margin='normal'
				fullWidth={true}
				label='Login'
				variant='outlined'
				placeholder='Type your login'
			/>
			<TextField
				type='password'
				margin='normal'
				fullWidth={true}
				label='Password'
				variant='outlined'
				placeholder='Type your password'
			/>

			<Button
				variant='outlined'
				sx={{
					fontFamily: 'Poppins',
					marginTop: 2,
					marginBottom: 1,
					width: '60%'
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
