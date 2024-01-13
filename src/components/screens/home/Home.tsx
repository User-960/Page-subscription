import React, { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'

const Home: FC = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Home',
		description: 'Home page'
	}

	return <Layout meta={meta}>Home Page</Layout>
}

export default Home
