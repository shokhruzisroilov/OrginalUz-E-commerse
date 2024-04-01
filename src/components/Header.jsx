import { Navbar } from '../components/index'
import { styles } from '../util/style'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { handelClicker } from '../app/features/state/shopingSlice'
import { useDispatch, useSelector } from 'react-redux'
import { humburger, colseMenu } from '../constants/index'
import { removeItem } from '../heplers/persistanceStorage'
import { logoutUser } from '../app/features/auth'
import payBox from '../assets/svg/pay-box.svg'
import logo from '../assets/icons/logo.uz.png'

function Header() {
	const [burger, setBurger] = useState(true)
	const { loggedIn, user } = useSelector(store => store.auth)
	const dispatch = useDispatch()

	const logoutHandle = () => {
		dispatch(logoutUser())
		removeItem('token')
	}

	const handleClick = () => {
		setBurger(!burger)
	}

	return (
		<header className='w-full bg-white shadow-shadowHead fixed top-0 z-10'>
			<div
				className={`${styles.container} h-[75px] flex justify-between items-center`}
			>
				<div>
					<Link to='/'>
						<img src={logo} alt='' className='w-40' />
					</Link>
				</div>
				<nav className='hidden sm:block'>
					<ul className='flex items-center gap-x-5'>
						<Navbar />
						<li>
							<img
								src={payBox}
								alt='pay box'
								onClick={() => dispatch(handelClicker())}
								className='w-5 h-5'
							/>
						</li>
					</ul>
				</nav>
				{loggedIn ? (
					<div className='hidden sm:flex gap-x-[20px] items-center'>
						<div className=' text-base sm:text-[18px] text-textColor  font-normal leading-normal'>
							<div className='w-40 text-center'>
								{user === null ? (
									<div class='w-full h-8 border-[1px] border-gray-200 rounded col-span-2'></div>
								) : (
									user?.username
								)}
							</div>
						</div>
						<button
							className={`${styles.btnPrimary} ${styles.btn}`}
							onClick={logoutHandle}
						>
							Logout
						</button>
					</div>
				) : (
					<div className='hidden sm:flex gap-x-[10px]'>
						<Link
							to='/register'
							className={`${styles.btnSecondary} ${styles.btn}`}
						>
							Ro'yhatdan o'tish
						</Link>
						<Link to='/login' className={`${styles.btnPrimary} ${styles.btn}`}>
							Kirish
						</Link>
					</div>
				)}
				<div className='flex items-center gap-5 sm:hidden'>
					<img
						src={payBox}
						alt='pay box'
						onClick={() => dispatch(handelClicker())}
						className='w-5 h-5'
					/>
					<div onClick={handleClick}>
						{burger ? (
							<img src={humburger} alt='humburger-image' className='w-6 h-6' />
						) : (
							<img src={colseMenu} alt='humburger-image' className='w-6 h-6' />
						)}
					</div>
				</div>
			</div>
			{!burger ? (
				<div className='bg-white flex flex-col gap-10 py-6 sidebar sm:hidden'>
					<ul className='flex items-center justify-center gap-x-5'>
						<Navbar handleClick={handleClick} />
					</ul>
					{loggedIn ? (
						<div className='flex justify-center gap-x-[20px] items-center'>
							<div className=' text-base sm:text-[18px] text-textColor  font-normal leading-normal'>
								<div className='w-40 text-center'>
									{user === null ? (
										<div class='w-full h-8 border-[1px] border-gray-200 rounded col-span-2'></div>
									) : (
										user?.username
									)}
								</div>
							</div>
							<button
								className={`${styles.btnPrimary} ${styles.btn}`}
								onClick={logoutHandle}
							>
								Logout
							</button>
						</div>
					) : (
						<div className='flex justify-center gap-x-[10px]'>
							<Link
								to='/register'
								className={`${styles.btnSecondary} ${styles.btn}`}
							>
								Register
							</Link>
							<Link
								to='/login'
								className={`${styles.btnPrimary} ${styles.btn}`}
							>
								Login
							</Link>
						</div>
					)}
				</div>
			) : null}
		</header>
	)
}

export default Header
