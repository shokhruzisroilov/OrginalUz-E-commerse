import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules'

import laptop from '../assets/simple.png'

export default function Slider() {
	return (
		<>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
				}}
				zoom={true}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Zoom, Navigation, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='swiper-zoom-container'>
						<img src={laptop} className='w-full object-cover' />
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
