import SearchIcon from '@mui/icons-material/Search'
import {
	Autocomplete,
	Grid,
	IconButton,
	InputBase,
	Stack,
	TextField,
	useTheme
} from '@mui/material'
import React, { FC } from 'react'

import { useCoins } from '@/components/hooks/useApp'

import styles from './SearchBlock.module.scss'
import { tokens } from '@/theme/theme'

const SearchBlock: FC = (): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const coins = useCoins()
	const top100Films = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: 'Pulp Fiction', year: 1994 },
		{
			title: 'The Lord of the Rings: The Return of the King',
			year: 2003
		}
	]

	return (
		// <Grid
		// 	className={styles.searchBlock}
		// 	sx={{ backgroundColor: `${colors.primary[600]}` }}
		// >
		// 	<IconButton className={styles.iconSearch}>
		// 		<SearchIcon />
		// 	</IconButton>
		// 	<InputBase className={styles.input} placeholder='Search' />
		// </Grid>

		<Stack spacing={2} sx={{ width: 217, margin: '0px 15px' }}>
			<Autocomplete
				id='search-coin'
				freeSolo
				disableClearable
				renderInput={element => (
					<TextField
						{...element}
						label={'Search'}
						InputProps={{ ...element.InputProps, type: 'search' }}
					/>
				)}
				options={coins.map(coin => coin.name)}
			/>
		</Stack>
	)
}

export default SearchBlock
