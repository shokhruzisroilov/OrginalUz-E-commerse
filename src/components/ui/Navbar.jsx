import { styles } from '../../util/style'
import { HashLink as Link } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { handelClick } from '../../app/features/state/shopingSlice'
import payBox from '../../assets/svg/pay-box.svg'
import { navbarLinks } from '../../constants/navbarLinks'
import { useState } from 'react'

function Navbar({ handleClick }) {
	const [activeLink, setActiveLink] = useState('home')

	const activeHandler = id => {
		setActiveLink(id)
	}

	const dispatch = useDispatch()
	const clazz = `${styles.styleNav}`
	const activeClazz = `${styles.styleNavActive}`
	return (
		<>
			{navbarLinks &&
				navbarLinks.map(item => {
					return (
						<li key={item.id} onClick={handleClick}>
							<Link
								to={`/#${item.id}`}
								className={activeLink === item.id ? activeClazz : clazz}
								onClick={() => activeHandler(item.id)}
							>
								{item.title}
							</Link>
						</li>
					)
				})}
			<li onClick={handelClick}>
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
