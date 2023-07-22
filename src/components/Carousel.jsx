import { styles } from '../util/style'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
//import slider image
import sliderImage from '../assets/slider-image.jpg'
import sliderImage2 from '../assets/slider2.jpg'
import sliderImage3 from '../assets/slider3.jpg'
import sliderImage4 from '../assets/slider4.jpg'

export default function Carousel() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide className='w-full h-[240px]'>
					<img src={sliderImage} alt='' className={`${styles.sliderImage}`} />
				</SwiperSlide>
				<SwiperSlide className='w-full h-[240px]'>
					<img src={sliderImage2} alt='' className={`${styles.sliderImage}`} />
				</SwiperSlide>
				<SwiperSlide className='w-full h-[240px]'>
					<img src={sliderImage3} alt='' className={`${styles.sliderImage}`} />
				</SwiperSlide>
				<SwiperSlide className='w-full h-[240px]'>
					<img src={sliderImage4} alt='' className={`${styles.sliderImage}`} />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
