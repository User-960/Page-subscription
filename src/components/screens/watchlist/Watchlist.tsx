import React from 'react'

import Layout from '../../layout/Layout'
import { IMeta } from '../../seo/meta.interface'

const Watchlist = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Watchlist',
		description: 'Watchlist page'
	}

	return (
		<Layout meta={meta}>
			<h1>Watchlist</h1>
		</Layout>
	)
}

export default Watchlist
