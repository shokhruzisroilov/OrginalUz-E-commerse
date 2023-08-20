import { styles } from '../../util/style'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { handelClick } from '../../app/features/state/shopingSlice'
import payBox from '../../assets/svg/pay-box.svg'
import { navbarLinks } from '../../constants/navbarLinks'
import { useState } from 'react'

function Navbar() {
	const [active, setActive] = useState('home')

	const activeHandler = id => {
		setActive(id)
	}

	const dispatch = useDispatch()
	const clazz = `${styles.styleNav}`
	const activeClazz = `${styles.styleNavActive}`
	return (
		<>
			{navbarLinks &&
				navbarLinks.map(item => {
					return (
						<li key={item.id}>
							<NavLink
								to={`/#${active}`}
								className={active === item.id ? activeClazz : clazz}
								onClick={() => activeHandler(item.id)}
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
