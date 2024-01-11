import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './Register.module.scss'

const Register = () => {
	const { push } = useRouter()

	return (
		<>
			<Typography
				variant='h3'
				fontFamily={'Poppins'}
				fontWeight={700}
				textAlign='center'
			>
				Registration
			</Typography>

			<Typography
				variant='body1'
				padding={3}
				fontFamily={'Poppins'}
				fontWeight={300}
				textAlign='center'
				marginBottom={3}
			>
				Enter your registration details
			</Typography>

			<TextField
				margin='normal'
				fullWidth={true}
				label='Name'
				variant='outlined'
				placeholder='Type your name'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				label='Username'
				variant='outlined'
				placeholder='Type your username'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				label='Email'
				variant='outlined'
				placeholder='Type your email'
			/>
			<TextField
				type='password'
				margin='normal'
				fullWidth={true}
				label='Password'
				variant='outlined'
				placeholder='Type your password'
			/>
			<TextField
				type='password'
				margin='normal'
				fullWidth={true}
				label='Repeat password'
				variant='outlined'
				placeholder='Repeat your password'
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
				Register
			</Button>

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
