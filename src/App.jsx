import { Routes, Route } from 'react-router-dom'
import {
	Layouts,
	HomePage,
	ShopingCart,
	Login,
	SignUp,
	Error404Page,
} from './index'
import { useEffect } from 'react'
import { getItem } from './heplers/persistanceStorage'

function App() {
	const getUser = () => {
		const token = getItem('token')
		return token
	}
	useEffect(() => {
		getUser()
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layouts getUser={getUser} />}>
					<Route index element={<HomePage />} />
					<Route path='/shoping/:postId' element={<ShopingCart />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<SignUp />} />
				<Route path='/*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App
