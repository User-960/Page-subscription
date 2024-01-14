import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/store'

export const useAppAuthDispatch: () => AppDispatch = useDispatch
export const useAppAuthSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuthLogged = () => {
	const { isLogged } = useAppAuthSelector(state => state.auth)
	return isLogged
}

export const useAuthLoading = () => {
	const { isLoading } = useAppAuthSelector(state => state.auth)
	return isLoading
}
