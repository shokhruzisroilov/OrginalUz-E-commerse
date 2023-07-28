import { styles } from '../util/style'
import { NavLink, Link } from 'react-router-dom'
import payBox from '../assets/svg/pay-box.svg'
import humburger from '../assets/svg/bars-solid.svg'
import colseMenu from '../assets/svg/close-menu.svg'
import { useState } from 'react'

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
						Orginal Uz
					</span>
				</div>
				<nav className='hidden sm:block'>
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
								to='/category'
								className={({ isActive }) => (isActive ? activeClazz : clazz)}
							>
								Category
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/product'
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
				<div className='hidden sm:flex gap-x-[10px]'>
					<Link to='/signIn' className={`${styles.btnSecondary} ${styles.btn}`}>
						Sign In
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
							{/* <img src={payBox} alt='pay box' onClick={shopingClick} /> */}
						</li>
					</ul>
					<div className='flex justify-center gap-x-[10px]'>
						<Link
							to='/signIn'
							className={`${styles.btnSecondary} ${styles.btn}`}
						>
							Sign In
						</Link>
						<Link to='/login' className={`${styles.btnPrimary} ${styles.btn}`}>
							Login
						</Link>
					</div>
				</div>
			) : (
				[]
			)}
		</header>
	)
}

export default Header
