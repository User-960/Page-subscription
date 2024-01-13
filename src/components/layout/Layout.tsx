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

const Layout: FC<ILayoutProps> = ({
	backLink = '/',
	children,
	meta
}): JSX.Element => {
	const isNoneMobile = useMediaQuery('(min-width:720px)')
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
								className={styles.container}
							>
								<SideBar
									isNoneMobile={isNoneMobile}
									drawerWidth='250px'
									isOpen={isOpen}
									setIsOpen={setIsOpen}
								/>
								<Box className={styles.mainSection}>
									<header className={styles.header}>
										<TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
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
