import Search from './Search'
import Product from './Product'
import { styles } from '../util/style'
import { productsData } from '../util/productsData'

function AllProducts() {
	return (
		<div className={`${styles.container} py-10 pb-20`} id='product'>
			<h2 className='text-center text-textColor sm:text-[32px] text-[24px] font-[500] leading-normal'>
				Barcha Mahsulotlar
			</h2>
			<Search />
			<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-10'>
				{productsData.map(item => {
					return (
						<Product
							key={item.id}
							id={item.id}
							image={item.image}
							type={item.type}
							name={item.name}
							descreption={item.descreption}
							price={item.price}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default AllProducts
