import React from "react";
import serviceProducts from "../service/ServiceProducts";
import { useState, useEffect } from "react";

export const ProductsContext = React.createContext()

export const ProductsContextProvider = ({children}) => {
	const [productData, setProductData] = useState([])
	useEffect(() => {
		serviceProducts
			.getProduct('albums')
			.then(data => {
				setProductData(data)
			})
			.catch(() => {
				console.log('Ellror')
			})
	}, [])

	console.log(productData)

	return (
		<ProductsContext.Provider value={{ productData, setProductData }}>
			{children}
		</ProductsContext.Provider>
	)
}