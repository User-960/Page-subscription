import Image from 'next/image'
import React from 'react'

import arrowDown from '../../../../public/images/arrowDown.svg'

import styles from './Menu.module.scss'

const cn = require('clsx')

const Menu = () => {
	return (
		<menu className='flex py-6 justify-center'>
			<nav className='flex justify-center items-center'>
				<div className={cn('mx-5', styles.menuItem)}>Integrations</div>
				<div className={cn('mx-5', styles.menuItem)}>
					Core Platform
					<button className='ml-1.5'>
						<Image src={arrowDown} width={12} height={12} alt='arrow down' />
					</button>
				</div>
				<div className={cn('mx-5', styles.menuItem)}>
					Company
					<button className='ml-1.5'>
						<Image src={arrowDown} width={12} height={12} alt='arrow down' />
					</button>
				</div>
				<div className={cn('mx-5', styles.menuItem)}>
					Resources
					<button className='ml-1.5'>
						<Image src={arrowDown} width={12} height={12} alt='arrow down' />
					</button>
				</div>
			</nav>

			<div className={cn('flex items-center', styles.contactBlock)}>
				<p className='mr-8'>Contact Sales</p>
				<button className={styles.menuBtn}>Book a Demo</button>
			</div>
		</menu>
	)
}

export default Menu
