import LoadingButton from '@mui/lab/LoadingButton'
import { Grid, useTheme } from '@mui/material'
import React, { FC } from 'react'

import styles from './ErrorBlock.module.scss'
import { tokens } from '@/theme/theme'

const ErrorBlock: FC = (): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Grid item xs={12} sm={12} lg={12}>
			<Grid
				className={styles.topCardItemNoData}
				sx={{
					flexDirection: 'column',
					backgroundColor: `${
						theme.palette.mode === 'light'
							? colors.primary.DEFAULT
							: colors.primary[600]
					}`,
					border: `1px solid ${colors.borderColor}`
				}}
			>
				<p>
					No data. <br />
					Wait one minute!
				</p>
				<LoadingButton loading variant='outlined'>
					Submit
				</LoadingButton>
			</Grid>
		</Grid>
	)
}

export default ErrorBlock
