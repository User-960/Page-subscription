import React from 'react';



import Layout from '@/components/layout/Layout';
import { IMeta } from '@/components/seo/meta.interface';


const Settings = (): JSX.Element => {
	const meta: IMeta = {
		title: 'Settings',
		description: 'Settings page'
	}

	return (
		<Layout meta={meta}>
			<h1>Settings</h1>
		</Layout>
	)
}

export default Settings