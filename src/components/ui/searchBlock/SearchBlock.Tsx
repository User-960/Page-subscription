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
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { useCoins } from '@/components/hooks/useApp'

import styles from './SearchBlock.module.scss'
import { tokens } from '@/theme/theme'

const SearchBlock: FC = (): JSX.Element => {
	const [selectedCoin, setSelectedCoin] = useState<string>('')

	const { push } = useRouter()

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const coins = useCoins()

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
				onChange={(e: any, value: string) => {
					push(`/coin/${value?.split(' ')[0]}`)
					setSelectedCoin('')
				}}
				value={selectedCoin}
				freeSolo
				disableClearable
				renderInput={element => (
					<TextField
						{...element}
						label={'Search'}
						InputProps={{ ...element.InputProps, type: 'search' }}
					/>
				)}
				options={coins.map(
					coin => `${coin.name} (${coin.symbol.toUpperCase()})`
				)}
			/>
		</Stack>
	)
}

export default SearchBlock
