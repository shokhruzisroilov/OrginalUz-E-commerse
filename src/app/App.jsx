import { Routes, Route } from 'react-router-dom'
import {
	Layouts,
	HomePage,
	ShopingCart,
	Login,
	Error404Page,
	SignUp,
	Category,
} from '../index'
// import { useContext } from "react"
// import { ProductsContext } from "../context/Context"

function App() {
	// const {productData} = useContext(ProductsContext)
	return (
		<>
			<Routes>
				<Route path='/' element={<Layouts />}>
					<Route index element={<HomePage />} />

					<Route path='/shoping' element={<ShopingCart />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/signIn' element={<SignUp />} />
				<Route path='/*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App
