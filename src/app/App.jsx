import { Routes, Route } from 'react-router-dom'
import {
	Layouts,
	HomePage,
	ShopingCart,
	Login,
	Error404Page,
	SignUp,
} from '../index'
import { store } from './store'
import { Provider } from 'react-redux'


function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<Layouts />}>
					<Route index element={<HomePage />} />
					<Route path='/shoping' element={<ShopingCart />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/signIn' element={<SignUp />} />
				<Route path='/*' element={<Error404Page />} />
			</Routes>
		</Provider>
	)
}

export default App
