import { createAsyncThunk } from '@reduxjs/toolkit'

import CoinGeckoService from '@/services/coingecko.service'

export const favoriteCoinsThunk = createAsyncThunk(
	'coins/markets',
	async (data: string, { rejectWithValue }) => {
		try {
			const coins = await CoinGeckoService.getFavoriteCoins(data)
			return coins
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)

export const chartPriceCoinsThunk = createAsyncThunk(
	'coins/market_chart',
	async (data: string, { rejectWithValue }) => {
		try {
			const coins = await CoinGeckoService.getChartPriceCoins(data)
			return coins
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)
