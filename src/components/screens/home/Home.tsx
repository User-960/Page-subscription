import React from 'react'

import Form from '@/components/ui/form/Form'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'

const Home = () => {
	const meta: IMeta = {
		title: 'Main Page',
		description: 'main page'
	}

	return (
		<Layout meta={meta}>
			<section className='flex'>
				<div className='px-56'>
					<div className={styles.cycleShadow}></div>
					<h1 className={styles.title}>
						Unlock valuable insights from subscription data
					</h1>
					<p className={styles.subTitle}>
						Analyze your subscription ecosystem for cost optimization and risk
						management
					</p>
					<Form />
				</div>

				<div>Section</div>
			</section>
		</Layout>
	)
}

export default Home
