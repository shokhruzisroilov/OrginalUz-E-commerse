import { styles } from '../util/style'
import { CategoryData } from './CategoryData'
//slider
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules

function Category() {
	return (
		<div className={`pt-10 ${styles.container}`}>
			<button className={`${styles.btnPrimary} px-6 py-[10px]`}>
				Product Category
			</button>
			<div className='pt-5 flex justify-center'>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						480: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						620: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1060: {
							slidesPerView: 6,
							spaceBetween: 50,
						},
					}}
					className='mySwiper	'
				>
					{CategoryData.map(item => {
						return (
							<React.Fragment key={item.id}>
								<SwiperSlide className='flex justify-center'>
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
							</React.Fragment>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}
export default Category
