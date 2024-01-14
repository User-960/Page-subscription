import { createSlice } from '@reduxjs/toolkit'

import { ICoinsState } from '@/interfaces/coins.interface/coins.interface'
import { favoriteCoinsThunk } from '@/store/thunks/coinsThunk/coinsThunk'

const initialState: ICoinsState = {
	coins: [],
	favoriteCoins: []
}

export const coinsSlice = createSlice({
	name: 'coins',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// builder.addCase(
		// 	favoriteCoinsThunk.pending,
		// 	(state: ICoinsState, action) => {
		// 		state.isLoading = true
		// 	}
		// )
		builder.addCase(
			favoriteCoinsThunk.fulfilled,
			(state: ICoinsState, action) => {
				state.favoriteCoins = action.payload
			}
		)
		// builder.addCase(
		// 	favoriteCoinsThunk.rejected,
		// 	(state: ICoinsState, action) => {
		// 		state.isLoading = false
		// 	}
		// )
	}
})

export default coinsSlice.reducer
