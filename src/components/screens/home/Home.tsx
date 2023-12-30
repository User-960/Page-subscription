import React, { useState } from 'react'

import Form from '@/components/ui/form/Form'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'

const Home = () => {
	const meta: IMeta = {
		title: 'Main Page',
		description: 'main page'
	}

	const [email, setEmail] = useState<string>('')

	const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value)
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

					<Form
						placeholder='Your business email...'
						onChange={onChangeEmail}
						value={email}
						type='email'
					/>
				</div>

				<div>Section</div>
			</section>
		</Layout>
	)
}

export default Home
