import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from '@/interfaces/auth.interface/auth.interface'
import { IWatchlistState } from '@/interfaces/watchlist.interface/watchlist.interface'
import {
	loginUserThunk,
	registerUserThunk
} from '@/store/thunks/authThunk/authThunk'
import { createWatchlistThunk } from '@/store/thunks/watchlistThunk/watchlistThunk'

const initialState: IWatchlistState = {
	watchlistArray: [],
	isLoading: false
}

export const watchlistSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// builder.addCase(loginUserThunk.pending, (state: IAuthState, action) => {
		// 	state.isLogged = false
		// 	state.isLoading = true
		// })
		builder.addCase(
			createWatchlistThunk.fulfilled,
			(state: IWatchlistState, action) => {
				state.watchlistArray = action.payload
				state.isLoading = false
			}
		)
		// builder.addCase(loginUserThunk.rejected, (state: IAuthState, action) => {
		// 	state.isLogged = false
		// 	state.isLoading = false
		// })
	}
})

export default watchlistSlice.reducer
