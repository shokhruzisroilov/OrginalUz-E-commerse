import { styles } from '../util/style'
import { NavLink, Link } from 'react-router-dom'
import payBox from '../assets/svg/pay-box.svg'

import { useState } from 'react'

function Header() {
	const clazz = `${styles.styleNav}`
	const activeClazz = `${styles.styleNavActive}`
	return (
		<header className='w-full bg-white shadow-shadowHead'>
			<div
				className={`${styles.container} py-3 flex justify-between items-center`}
			>
				<div>
					<h2 className='text-textColor text-[20px] leadin-normal font-[400]'>
						OrginalUz
					</h2>
				</div>
				<nav>
					<ul className='flex items-center gap-x-5'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Category
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Product
							</NavLink>
						</li>
						<li>
							<img src={payBox} alt='pay box' />
						</li>
					</ul>
				</nav>
				<div className='flex gap-x-[10px]'>
					<Link to='/signIn' className={`${styles.btnSecondary} ${styles.btn}`}>
						Sign In
					</Link>
					<Link to='/login' className={`${styles.btnPrimary} ${styles.btn}`}>
						Login
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
