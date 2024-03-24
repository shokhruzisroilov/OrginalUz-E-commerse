import { styles } from '../util/style'
import { CategoryData } from '../util/CategoryData'
import { HashLink } from 'react-router-hash-link'
//slider
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useDispatch, useSelector } from 'react-redux'
import Categoryservice from '../service/category'
import { useEffect } from 'react'
import {
	getCategoryFailure,
	getCategoryStart,
	getCategorySuccess,
} from '../app/features/category/categorySlice'
import LoaderCategory from '../animation/LoaderCategory'
// import required modules

function Category() {
	const { categories, isLoading, error } = useSelector(state => state.category)
	// console.log(categories)
	const dispatch = useDispatch()

	const getCategory = async () => {
		dispatch(getCategoryStart())
		try {
			const response = await Categoryservice.getCategory()
			dispatch(getCategorySuccess(response))
		} catch (error) {
			dispatch(getCategoryFailure(error))
			console.log(error)
		}
	}

	useEffect(() => {
		getCategory()
	}, [])

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
				<div className='flex items-center justify-center'>
					{isLoading && <LoaderCategory />}
				</div>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
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
								<SwiperSlide className='flex justify-center' key={item.id}>
									<div className='bg-white max-w-[244px] min-h-max cursor-pointer'>
										<img
											src={item.image}
											alt={item.title}
											className='w-full  h-[164px] object-cover'
										/>
										<button className='w-full py-2 bg-secondary hover:bg-primary text-primary hover:text-secondary text-[16px] font-[500] '>
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
