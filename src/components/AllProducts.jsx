import Search from './Search'
import Product from './Product'
import { styles } from '../util/style'
import { useDispatch, useSelector } from 'react-redux'
import ProductService from '../service/products'
import { useEffect } from 'react'
import {
	getProductsFailure,
	getProductsStart,
	getProductsSuccess,
} from '../app/features/products/productsSlice'
import LoaderProduct from '../animation/LoaderProduct/LoaderProduct'
import NotFount from './ui/NotFount'

function AllProducts() {
	const { isLoading, products } = useSelector(state => state.products)
	const dispatch = useDispatch()

	const getProducts = async () => {
		dispatch(getProductsStart())
		try {
			const response = await ProductService.getProducts()
			dispatch(getProductsSuccess(response))
		} catch (error) {
			dispatch(getProductsFailure('Mahsulot topilmadi'))
		}
	}

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<div className={`${styles.container} py-10 pb-20`} id='product'>
			<h2 className='text-center text-textColor sm:text-[32px] text-[24px] font-[500] leading-normal'>
				Barcha Mahsulotlar
			</h2>
			<Search />
			<div className='w-full flex items-center justify-center'>
				{isLoading && (
					<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-10'>
						{Array.from({ length: products.length }, (_, index) => (
							<LoaderProduct key={index} />
						))}
					</div>
				)}
				{!isLoading && products.length === 0 && <NotFount />}
			</div>
			<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-10'>
				{!isLoading &&
					products &&
					products.map(product => {
						return <Product key={product.id} {...product} />
					})}
			</div>
		</div>
	)
}

export default AllProducts
