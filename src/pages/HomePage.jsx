import { Carousel, Category, AllProducts, AddToCart } from '../components/index'

function HomePage() {
	return (
		<main className='w-full bg-mainBg'>
			<div>
				<Carousel />
				<Category />
				<AllProducts />
				<AddToCart />
			</div>
		</main>
	)
}
export default HomePage
