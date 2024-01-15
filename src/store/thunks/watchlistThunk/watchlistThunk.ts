import { createAsyncThunk } from '@reduxjs/toolkit'

import { IWatchlistData } from '@/interfaces/watchlist.interface/watchlist.interface'
import AuthService from '@/services/auth.service'

export const createWatchlistThunk = createAsyncThunk(
	'watchlist/create',
	async (data: IWatchlistData, { rejectWithValue }) => {
		try {
			const watchlist = await AuthService.createNewWatchlist(
				data.name,
				data.assetId
			)
			return watchlist
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)
