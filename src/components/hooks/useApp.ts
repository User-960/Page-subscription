import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuthLogged = () => {
	const { isLogged } = useAppSelector(state => state.auth)
	return isLogged
}

export const useAuthLoading = () => {
	const { isLoading } = useAppSelector(state => state.auth)
	return isLoading
}

export const useCoins = () => {
	const { coins } = useAppSelector(state => state.coins)
	return coins
}

export const useCoinsFavorite = () => {
	const { favoriteCoins } = useAppSelector(state => state.coins)
	return favoriteCoins
}

export const useCoinsFavoriteLoading = () => {
	const { isLoading } = useAppSelector(state => state.coins)
	return isLoading
}

export const useChartPriceCoins = () => {
	const { chartPriceCoinsData } = useAppSelector(state => state.coins)
	return chartPriceCoinsData
}

export const useWatchlist = () => {
	const { watchlist } = useAppSelector(state => state.watchlist)
	return watchlist
}

export const useNews = () => {
	const { news } = useAppSelector(state => state.news)
	return news
}
