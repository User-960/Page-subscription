import React, { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const News: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'News',
		description: 'News page'
	}

	return (
		<Layout meta={meta}>
			<h1>News</h1>
		</Layout>
	)
}

export default News
