import { useRouter } from 'next/router'
import React from 'react'

import Login from './login/Login'
import Register from './register/Register'

const AuthRootComponent = () => {
	const { pathname } = useRouter()

	return pathname === '/login' ? (
		<Login />
	) : pathname === '/register' ? (
		<Register />
	) : null
}

export default AuthRootComponent
