import { useState } from 'react'

import { styles } from '../util/style'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/index'

import { humburger, colseMenu } from '../constants/index'

function Header() {
	const [burger, setBurger] = useState(true)

	const handleClick = () => {
		setBurger(!burger)
	}

	const clazz = `${styles.styleNav}`
	const activeClazz = `${styles.styleNavActive}`
	return (
		<header className='w-full bg-white shadow-shadowHead fixed top-0 z-10'>
			<div
				className={`${styles.container} h-[75px] flex justify-between items-center`}
			>
				<div>
					<span className='self-center text-textColor text-xl sm:text-2xl font-semibold whitespace-nowrap'>
						<Link to='/'>Orginal Uz</Link>
					</span>
				</div>
				<nav className='hidden sm:block'>
					<ul className='flex items-center gap-x-5'>
						<Navbar />
					</ul>
				</nav>
				<div className='hidden sm:flex gap-x-[10px]'>
					<Link
						to='/register'
						className={`${styles.btnSecondary} ${styles.btn}`}
					>
						Register
					</Link>
					<Link to='/login' className={`${styles.btnPrimary} ${styles.btn}`}>
						Login
					</Link>
				</div>
				<div className=' sm:hidden' onClick={handleClick}>
					{burger ? (
						<img src={humburger} alt='humburger-image' className='w-6 h-6' />
					) : (
						<img src={colseMenu} alt='humburger-image' className='w-6 h-6' />
					)}
				</div>
			</div>
			{!burger ? (
				<div className='bg-white flex flex-col gap-10 py-6 sidebar'>
					<ul className='flex items-center justify-center gap-x-5'>
						<Navbar handleClick={handleClick} />
					</ul>
					<div className='flex justify-center gap-x-[10px]'>
						<Link
							to='/register'
							className={`${styles.btnSecondary} ${styles.btn}`}
						>
							Register
						</Link>
						<Link to='/login' className={`${styles.btnPrimary} ${styles.btn}`}>
							Login
						</Link>
					</div>
				</div>
			) : null}
		</header>
	)
}

export default Header
