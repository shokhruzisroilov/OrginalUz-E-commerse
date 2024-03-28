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
import { useDispatch, useSelector } from 'react-redux'
import { refreshLogin } from './app/features/auth'

function App() {
	const dispatch = useDispatch()

	const getUser = async () => {
		dispatch(refreshLogin())
	}
	useEffect(() => {
		getUser()
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
