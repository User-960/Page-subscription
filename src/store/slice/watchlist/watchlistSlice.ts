import { createSlice } from '@reduxjs/toolkit'

import { IWatchlistState } from '@/interfaces/watchlist.interface/watchlist.interface'
import { getAllWatchlistThunk } from '@/store/thunks/watchlistThunk/watchlistThunk'

const initialState: IWatchlistState = {
	watchlist: [],
	isLoading: false
}

export const watchlistSlice = createSlice({
	name: 'watchlist',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// builder.addCase(loginUserThunk.pending, (state: IAuthState, action) => {
		// 	state.isLogged = false
		// 	state.isLoading = true
		// })
		builder.addCase(
			getAllWatchlistThunk.fulfilled,
			(state: IWatchlistState, action) => {
				state.watchlist = action.payload
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
