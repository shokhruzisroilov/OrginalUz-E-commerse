import { Routes, Route } from 'react-router-dom'
import {
	Layouts,
	HomePage,
	ShopingCart,
	Login,
	SignUp,
	Error404Page,
} from './index'


function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layouts />}>
					<Route index element={<HomePage />} />
					<Route path='/shoping' element={<ShopingCart />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<SignUp />} />
				<Route path='/*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App
