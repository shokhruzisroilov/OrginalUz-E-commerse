import { Routes, Route } from 'react-router-dom'

import { Layouts, HomePage, Login, Error404Page, SignIn } from '../index'
// import { useContext } from "react"
// import { ProductsContext } from "../context/Context"

function App() {
	// const {productData} = useContext(ProductsContext)
	return (
		<>
			<Routes>
				<Route path='/' element={<Layouts />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/signIn' element={<SignIn />} />
				<Route path='/*' element={<Error404Page />} />
			</Routes>
		</>
	)
}

export default App
