import React from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const Home = () => {
	const meta: IMeta = {
		title: 'Main Page',
		description: 'main page'
	}

	return <Layout meta={meta}>Page Home</Layout>
}

export default Home
