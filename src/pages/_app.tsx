import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '@/assets/styles/index.scss'
import store from '@/store'
import { ColorModeContext, useMode } from '@/theme/theme'

export default function App({ Component, pageProps }: AppProps) {
	const [theme, colorMode] = useMode()
	return (
		<Provider store={store}>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</ColorModeContext.Provider>
		</Provider>
	)
}
