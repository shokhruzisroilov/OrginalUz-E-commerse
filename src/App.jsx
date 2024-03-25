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
import AuthService from './service/auth'

function App() {
	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={<Layouts />}>
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
