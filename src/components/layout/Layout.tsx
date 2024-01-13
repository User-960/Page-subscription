import { Box, useMediaQuery } from '@mui/material'
import { FC, Fragment, ReactNode, useState } from 'react'

import SideBar from '../ui/sideBar/SideBar'
import TopBar from '../ui/topBar/TopBar'

import { useAuthLogged } from '../hooks/useAppAuth'

import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import styles from './Layout.module.scss'

interface ILayoutProps {
	backLink?: string
	children?: ReactNode
	meta: IMeta
}

const Layout: FC<ILayoutProps> = ({ backLink = '/', children, meta }) => {
	const isNoneMobile = useMediaQuery('(min-width:600px)')
	const auth = useAuthLogged()
	const [isOpen, setIsOpen] = useState<boolean>(true)

	return (
		<>
			<Meta title={meta.title} description={meta.description}>
				<div className={styles.mainWrapper}>
					{auth ? (
						<>
							<Box
								display={isNoneMobile ? 'flex' : 'block'}
								width='100%'
								height='100%'
							>
								<SideBar
									isNoneMobile={isNoneMobile}
									drawerWidth='250'
									isOpen={isOpen}
									setIsOpen={setIsOpen}
								/>
								<Box>
									<header className={styles.header}>
										<TopBar />
									</header>

									<main className={styles.contentWrapper}>
										{children && <Fragment>{children}</Fragment>}
									</main>

									<footer className={styles.footer}></footer>
								</Box>
							</Box>
						</>
					) : (
						<>
							<main className={styles.contentWrapper}>
								{children && <Fragment>{children}</Fragment>}
							</main>
						</>
					)}
				</div>
			</Meta>
		</>
	)
}

export default Layout
