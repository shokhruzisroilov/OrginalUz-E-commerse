import { styles } from '../util/style'
import serviceProducts from '../service/ServiceProducts'
import { useState, useEffect } from 'react'

import { Carousel, AllProducts, AddToCart, Category, Footer} from '../index'

function HomePage() {

	return (
		<main className='w-full bg-mainBg'>
			<div>
				<Carousel />
				<Category />
				<AllProducts />
				<Footer />
				<AddToCart />
			</div>
		</main>
	)
}

export default HomePage
