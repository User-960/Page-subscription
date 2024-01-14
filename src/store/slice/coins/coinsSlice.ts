import { createSlice } from '@reduxjs/toolkit'

import { ICoinsState } from '@/interfaces/coins.interface/coins.interface'
import {
	chartPriceCoinsThunk,
	favoriteCoinsThunk
} from '@/store/thunks/coinsThunk/coinsThunk'

const initialState: ICoinsState = {
	coins: [],
	favoriteCoins: [],
	chartPriceCoinsData: []
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

		builder.addCase(
			chartPriceCoinsThunk.fulfilled,
			(state: ICoinsState, action) => {
				state.chartPriceCoinsData.push(action.payload)

				state.chartPriceCoinsData.forEach(
					coin => (coin.data_price.prices.length = 30)
				)
			}
		)
	}
})

export default coinsSlice.reducer
