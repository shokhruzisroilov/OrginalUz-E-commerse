import { styles } from '../../util/style'
import { CategoryData } from './CategoryData'
import { HashLink } from 'react-router-hash-link'
//slider
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules

function Category() {
	return (
		<div
			className={`pt-10 md:max-w-[1700px] md:px-20 sm:px-10 m-auto`}
			id='category'
		>
			<HashLink to='#category'>
				<button
					className={`${styles.btnPrimary} sl:mx-5 sm:mx-0 px-6 py-[10px]`}
				>
					Product Category
				</button>
			</HashLink>
			<div className='pt-5 flex justify-center'>
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
					{CategoryData &&
						CategoryData.map(item => {
							return (
								<SwiperSlide className='flex justify-center' key={item.id}>
									<div className='bg-white max-w-[244px] min-h-max cursor-pointer'>
										<img
											src={item.image}
											alt='item image'
											className='w-full h-[164px] object-cover'
										/>
										<button className='w-full py-2 bg-secondary text-primary text-[16px] font-[500] '>
											{item.text}
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
