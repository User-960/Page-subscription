import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppDispatch, useAuthLogged } from '@/components/hooks/useApp'

import Auth from '@/components/auth/Auth'

import { EN_USER } from '@/config/app.constants'
import { login } from '@/store/slice/auth/authSlice'

export const LoginPage = () => {
	const { push } = useRouter()
	// const dispatch = useAppDispatch()
	const auth = useAuthLogged()

	useEffect(() => {
		if (auth) {
			console.log('Login page')
			push('/')
		}
	}, [])

	// useEffect(() => {
	// 	if (
	// 		localStorage.getItem(EN_USER.FIRST_NAME) &&
	// 		Cookies.get(EN_USER.TOKEN)
	// 	) {
	// 		dispatch(login(localStorage.getItem(EN_USER.FIRST_NAME)))
	// 		push('/')
	// 	}
	// }, [])

	return <Auth />
}

export default LoginPage
