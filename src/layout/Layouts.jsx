import { Header } from '../components/index'
import { Footer } from '../components/index'
import { Outlet } from 'react-router-dom'

function Layouts({ getUser }) {
	return (
		<>
			<Header getUser={getUser} />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layouts
