import SearchIcon from '@mui/icons-material/Search'
import { Grid, IconButton, InputBase, useTheme } from '@mui/material'
import React, { FC } from 'react'

import styles from './SearchBlock.module.scss'
import { tokens } from '@/theme/theme'

const SearchBlock: FC = (): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Grid
			className={styles.searchBlock}
			sx={{ backgroundColor: `${colors.primary[600]}` }}
		>
			<IconButton className={styles.iconSearch}>
				<SearchIcon />
			</IconButton>
			<InputBase className={styles.input} placeholder='Search' />
		</Grid>
	)
}

export default SearchBlock
