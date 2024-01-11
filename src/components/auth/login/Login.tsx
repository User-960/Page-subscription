import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { Dispatch, FC } from 'react'

import styles from './Login.module.scss'

interface ILoginProps {
	setEmail: Dispatch<React.SetStateAction<string | null>>
	setPassword: Dispatch<React.SetStateAction<string | null>>
}

const Login: FC<ILoginProps> = ({ setEmail, setPassword }) => {
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
				Type your email and password
			</Typography>

			<TextField
				margin='normal'
				fullWidth={true}
				label='Email'
				variant='outlined'
				placeholder='Type your email'
				onChange={e => setEmail(e.target.value)}
				required={true}
			/>
			<TextField
				type='password'
				margin='normal'
				fullWidth={true}
				label='Password'
				variant='outlined'
				placeholder='Type your password'
				onChange={e => setPassword(e.target.value)}
				required={true}
			/>

			<Button
				type='submit'
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
