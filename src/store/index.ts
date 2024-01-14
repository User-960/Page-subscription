import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slice/auth/authSlice'
import coinsSlice from './slice/coins/coinsSlice'

const store = configureStore({
	reducer: {
		auth: authSlice,
		coins: coinsSlice
	}
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
