export interface IWatchlistData {
	name: string | null
	assetId: string | number | null
}

export interface INews {
	id: string
	guid: string
	published_on: number
	imageurl: string
	title: string
	url: string
	body: string
	tags: string
	lang: string
	upvotes: string
	downvotes: string
	categories: string
	source_info: ISourceInfo
	source: string
}

export interface ISourceInfo {
	name: string
	img: string
	lang: string
}

export interface INewsState {
	news: INews[]
	isLoading: boolean
}
