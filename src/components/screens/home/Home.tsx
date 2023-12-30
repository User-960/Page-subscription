import React, { useState } from 'react'

import Form from '@/components/ui/form/Form'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Home.module.scss'

const cn = require('clsx')

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

				<div>
					<div className={styles.document}>
						<h6 className={styles.titleDoc}>Acme Corp.</h6>
						<div className={cn(styles.line, 'mt-3.5', 'mb-4')}></div>
						<div className='flex'>
							<div>
								<p className={styles.address}>Acme Software Co.</p>
								<p className={styles.address}>50 E Rio Grande Pkwy</p>
								<p className={styles.address}>Tempe, AZ 85281 United States</p>
							</div>
							<div className='ml-9'>
								<p className={styles.address}>Wasatch Cloud Inc.</p>
								<p className={styles.address}>18560 West Sunset Blvd.</p>
								<p className={styles.address}>LOS Angeles, CA 90046 US</p>
							</div>
						</div>
						<div className={cn(styles.line, 'mt-4', 'mb-6')}></div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Home
