import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppDispatch } from '@/components/hooks/useApp'

import Auth from '@/components/auth/Auth'

import { EN_USER } from '@/config/app.constants'
import { login } from '@/store/slice/auth/authSlice'

export const LoginPage = () => {
	const { push } = useRouter()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (localStorage.getItem(EN_USER.FIRST_NAME)) {
			dispatch(login(localStorage.getItem(EN_USER.FIRST_NAME)))
			push('/')
		}
	}, [])

	return <Auth />
}

export default LoginPage
