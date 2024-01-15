export interface IWatchlistData {
	name: string | null
	assetId: string | number | null
}

export interface IWatchlist {
	assetId: string
	name: string
	user: number
}

export interface IWatchlistState {
	watchlist: IWatchlist[]
	isLoading: boolean
}
