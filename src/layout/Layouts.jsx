import { Header } from '../components/index'
import { Footer } from '../components/index'
import { Outlet } from 'react-router-dom'

function Layouts() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layouts
