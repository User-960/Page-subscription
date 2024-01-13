export interface IAuthFormFields {
	email: string
	password: string
}

export interface IUserResponse {
	user: IUser
	token: string
}

export interface IUser {
	id: number
	firstName: string
	username: string
	email: string
	createdAt: string
	updatedAt: string
	watchlist: IWatchlist[]
}

export interface IWatchlist {
	id: number
	name: string
	assetId: string
	createdAt: string
	updatedAt: string
	user: number
}

export interface IAuthState {
	userData: IUserResponse | null
	isLogged: boolean
}
