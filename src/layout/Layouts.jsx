import { Header } from '../components/index'
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
