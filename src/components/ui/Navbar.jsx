import { styles } from '../../util/style'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { handelClick } from '../../app/features/state/shopingSlice'
import payBox from '../../assets/svg/pay-box.svg'
import { navbarLinks } from '../../constants/navbarLinks'
import { useState } from 'react'

function Navbar({ handleClick }) {
	const [active, setActive] = useState('home')

	const activeHandler= (id) => {
		setActive(id)
	}

	const dispatch = useDispatch()
	const clazz = `${styles.styleNav}`
	const activeClazz = `${styles.styleNavActive}`
	return (
		<>
			{navbarLinks.map(item => {
				return (
					<li onClick={() => activeHandler(item.id)}>
						<NavLink
							to={`/#${item.id}`}
							className={active === item.id ? activeClazz : clazz}
							smooth
							onClick={handleClick}
						>
							{item.title}
						</NavLink>
					</li>
				)
			})}
			<li onClick={handleClick}>
				<img
					src={payBox}
					alt='pay box'
					onClick={() => dispatch(handelClick())}
				/>
			</li>
		</>
	)
}

export default Navbar
