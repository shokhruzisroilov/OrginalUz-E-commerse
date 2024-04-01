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
import { useDispatch, useSelector } from 'react-redux'
import { giveLogin, refreshLogin } from './app/features/auth'
import AuthService from './service/auth'

function App() {
	const { loggedIn } = useSelector(store => store.auth)
	const dispatch = useDispatch()
	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(giveLogin(response))
		} catch (error) {
			console.log(error)
		}
	}

	const getToken = async () => {
		dispatch(refreshLogin())
	}
	useEffect(() => {
		getToken()
		getUser()
	}, [loggedIn])

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
