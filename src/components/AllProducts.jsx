import Search from './Search'
import Product from './Product'
import { styles } from '../util/style'

function AllProducts() {
	return (
		<div className={`${styles.container} py-10 pb-20`}>
			<h2 className='text-center text-textColor sm:text-[32px] text-[24px] font-[500] leading-normal'>
				All Products
			</h2>
			<Search />
			<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 		pt-10'>
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
