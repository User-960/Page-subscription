import { createAsyncThunk } from '@reduxjs/toolkit'

import CryptoCompareService from '@/services/cryptocompare.service'

export const getNews = createAsyncThunk(
	'get-news',
	async (_: any, { rejectWithValue }) => {
		try {
			const news = await CryptoCompareService.getNews()
			return news
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)
