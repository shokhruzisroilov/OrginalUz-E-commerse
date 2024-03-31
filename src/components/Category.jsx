import { styles } from '../util/style'
import { HashLink } from 'react-router-hash-link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
	getCategoryFailure,
	getCategoryStart,
	getCategorySuccess,
} from '../app/features/category/categorySlice'
import LoaderCategory from '../animation/LoaderCategory'
import Categoryservice from '../service/category'
import { filteredProduct } from '../app/features/products/productsSlice'

function Category() {
	const [filter, setFilter] = useState(null)
	const { categories, isLoading } = useSelector(state => state.category)
	const dispatch = useDispatch()

	// getcategory
	const getCategory = async () => {
		dispatch(getCategoryStart())
		try {
			const response = await Categoryservice.getCategory()
			dispatch(getCategorySuccess(response))
		} catch (error) {
			dispatch(getCategoryFailure(error))
		}
	}
	useEffect(() => {
		getCategory()
	}, [])

	// filter send slug
	const filterProducts = slug => {
		dispatch(filteredProduct(slug))
		setFilter(slug)
	}

	return (
		<div
			className={`pt-10 md:max-w-[1700px] md:px-20 sm:px-10 m-auto`}
			id='category'
		>
			<HashLink to='#category'>
				<button
					className={`${styles.btnPrimary} sl:mx-5 sm:mx-0 px-6 py-[10px]`}
				>
					Kategoriya
				</button>
			</HashLink>
			<div className='pt-5 flex justify-center'>
				{/* // LoaderCategory */}
				{isLoading && <LoaderCategory />}
				<Swiper
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						320: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						480: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						620: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						768: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
						1060: {
							slidesPerView: 6,
							spaceBetween: 50,
						},
					}}
					className='mySwiper'
				>
					{!isLoading &&
						categories &&
						categories.map(item => {
							return (
								<SwiperSlide
									className='max-w-[168px] flex justify-center select-none'
									key={item.id}
									onClick={() => filterProducts(item.id)}
								>
									<div className='bg-white w-full h-[168px] cursor-pointer transition duration-800 ease-linear hover:scale-90'>
										<img
											src={item.image}
											alt={item.title}
											className='w-full h-full object-cover relative '
										/>
										<button
											className={`w-full absolute bottom-0 left-0  right-0 py-2  transition duration-400 ease-linear hover:bg-primary  hover:text-secondary text-[16px] font-[500] ${
												filter === item.id
													? 'bg-primary text-secondary'
													: 'bg-secondary text-primary'
											}`}
										>
											{item.title}
										</button>
									</div>
								</SwiperSlide>
							)
						})}
				</Swiper>
			</div>
		</div>
	)
}
export default Category
