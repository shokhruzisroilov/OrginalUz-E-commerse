import Search from './Search'
import Product from './Product'

function AllProducts() {
	return (
		<div className='py-10 pb-20 '>
			<h2 className='text-center text-textColor text-[32px] font-[500] leading-normal'>
				All Products
			</h2>
			<Search />
			<div className='grid grid-cols-4 gap-6 pt-10'>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	)
}

export default AllProducts
