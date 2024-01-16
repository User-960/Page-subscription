import { createSlice } from '@reduxjs/toolkit'

import { IWatchlistState } from '@/interfaces/watchlist.interface/watchlist.interface'
import { mockWatchlist } from '@/mocks/watchlist/watchlist'
import {
	createWatchlistThunk,
	getAllWatchlistThunk
} from '@/store/thunks/watchlistThunk/watchlistThunk'

const initialState: IWatchlistState = {
	watchlist: [],
	isLoading: false
}

export const watchlistSlice = createSlice({
	name: 'watchlist',
	initialState,
	reducers: {
		saveCoin(state: IWatchlistState, action) {
			state.watchlist.push(action.payload)
		},
		deleteCoin(state: IWatchlistState, action) {
			const findCoinIndex = state.watchlist.findIndex(
				coin => coin.assetId === action.payload
			)

			if (findCoinIndex !== -1) {
				state.watchlist.splice(findCoinIndex, 1)
			}
		}
	},
	extraReducers: builder => {
		builder.addCase(
			createWatchlistThunk.fulfilled,
			(state: IWatchlistState, action: any) => {
				state.watchlist.push(action.payload)
				state.isLoading = false
			}
		),
			builder.addCase(
				getAllWatchlistThunk.fulfilled,
				(state: IWatchlistState, action) => {
					state.watchlist = action.payload
					state.isLoading = false
				}
			)
	}
})
export const { saveCoin, deleteCoin } = watchlistSlice.actions
export default watchlistSlice.reducer
