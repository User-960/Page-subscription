import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

import styles from './Login.module.scss'

const Login = () => {
	return (
		<div>
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
				Введите ваш логин и пароль
			</Typography>

			<TextField
				margin='normal'
				fullWidth={true}
				label='Login'
				variant='outlined'
				placeholder='Type your Login'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				label='Password'
				variant='outlined'
				placeholder='Type your Password'
			/>

			<Button variant='outlined' sx={{ fontFamily: 'Poppins', marginTop: 2 }}>
				Contained
			</Button>
		</div>
	)
}

export default Login
