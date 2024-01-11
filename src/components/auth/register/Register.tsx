import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { Dispatch, FC } from 'react'

import styles from './Register.module.scss'

interface IRegisterProps {
	setFirstName: Dispatch<React.SetStateAction<string | null>>
	setUsername: Dispatch<React.SetStateAction<string | null>>
	setEmail: Dispatch<React.SetStateAction<string | null>>
	setPassword: Dispatch<React.SetStateAction<string | null>>
	setRepeatPassword: Dispatch<React.SetStateAction<string | null>>
}

const Register: FC<IRegisterProps> = ({
	setFirstName,
	setUsername,
	setEmail,
	setPassword,
	setRepeatPassword
}): JSX.Element => {
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
				label='First name'
				variant='outlined'
				placeholder='Type your first name'
				onChange={e => setFirstName(e.target.value)}
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				label='Username'
				variant='outlined'
				placeholder='Type your username'
				onChange={e => setUsername(e.target.value)}
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				label='Email'
				variant='outlined'
				placeholder='Type your email'
				onChange={e => setEmail(e.target.value)}
			/>
			<TextField
				type='password'
				margin='normal'
				fullWidth={true}
				label='Password'
				variant='outlined'
				placeholder='Type your password'
				onChange={e => setPassword(e.target.value)}
			/>
			<TextField
				type='password'
				margin='normal'
				fullWidth={true}
				label='Repeat password'
				variant='outlined'
				placeholder='Repeat your password'
				onChange={e => setRepeatPassword(e.target.value)}
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
