import { Header } from '../index'
import { Outlet } from 'react-router-dom'

function Layouts() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default Layouts
