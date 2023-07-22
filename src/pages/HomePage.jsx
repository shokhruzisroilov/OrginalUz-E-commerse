import { styles } from '../util/style'
import serviceProducts from '../service/ServiceProducts'
import { useState, useEffect } from 'react'

import { Carousel, Category, AllProducts } from '../index'

function HomePage() {
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

	// console.log(productData)


	return (
		<main className='w-full bg-mainBg'>
			<div className={`${styles.container} `}>
				<Carousel />
				<Category />
				<AllProducts />
			</div>
		</main>
	)
}

export default HomePage
