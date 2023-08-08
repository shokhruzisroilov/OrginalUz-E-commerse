import { styles } from '../../util/style'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { handelClick } from '../../app/features/state/shopingSlice'

import payBox from '../../assets/svg/pay-box.svg'

export function Navbar({ handleClick }) {
	const dispatch = useDispatch()

	const clazz = `${styles.styleNav}`
	const activeClazz = `${styles.styleNavActive}`
	return (
		<>
			<li>
				<NavLink to='/#top' className={`${clazz}`} smooth onClick={handleClick}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/#category'
					className={`${clazz}`}
					smooth
					onClick={handleClick}
				>
					Category
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/#product'
					className={`${clazz}`}
					smooth
					onClick={handleClick}
				>
					Product
				</NavLink>
			</li>
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
