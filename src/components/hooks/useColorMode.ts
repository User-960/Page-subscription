import { useContext } from 'react'

import { ColorModeContext } from '@/theme/theme'

export const useColorMode = () => useContext(ColorModeContext)
