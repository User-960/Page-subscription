import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '@/assets/styles/index.scss'
import store from '@/store'
import { ColorModeContext, useMode } from '@/theme/theme'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ Component, pageProps }: AppProps) {
	const [theme, colorMode] = useMode()
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</ColorModeContext.Provider>
			</QueryClientProvider>
		</Provider>
	)
}
