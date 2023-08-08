import {
	Carousel,
	Category,
	AllProducts,
	Footer,
	AddToCart,
} from '../components/index'

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
