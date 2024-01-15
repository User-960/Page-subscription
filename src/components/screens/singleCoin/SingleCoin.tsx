import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const SingleCoin: FC = (): JSX.Element => {
	const { back } = useRouter()

	const meta: IMeta = {
		title: 'Single',
		description: 'Single page'
	}

	return (
		<Layout meta={meta}>
			<Button
				onClick={() => back()}
				variant='contained'
				sx={{
					margin: '15px auto',
					width: '160px',
					backgroundColor: '#1900d5 !important'
				}}
			>
				Go back
			</Button>
		</Layout>
	)
}

export default SingleCoin
