import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slice/auth/authSlice'
import coinsSlice from './slice/coins/coinsSlice'
import newsSlice from './slice/news/newsSlice'
import watchlistSlice from './slice/watchlist/watchlistSlice'

const store = configureStore({
	reducer: {
		auth: authSlice,
		coins: coinsSlice,
		watchlist: watchlistSlice,
		news: newsSlice
	}
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
