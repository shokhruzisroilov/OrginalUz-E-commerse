import { styles } from '../util/style'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
//import slider image
import sliderImage1 from '../assets/images/slider-image1.jpg'
import sliderImage2 from '../assets/images/slider-image2.jpg'
import sliderImage3 from '../assets/images/slider-image3.jpg'

export default function Carousel() {
	return (
		<div
			className='pt-[75px] md:max-w-[1700px] md:px-20 sm:px-10 m-auto select-none'
			id='home'
		>
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
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide className='w-full h-[240px]'>
					<img src={sliderImage1} alt='' className={`${styles.sliderImage}`} />
				</SwiperSlide>
				<SwiperSlide className='w-full h-[240px]'>
					<img src={sliderImage2} alt='' className={`${styles.sliderImage}`} />
				</SwiperSlide>
				<SwiperSlide className='w-full h-[240px]'>
					<img src={sliderImage3} alt='' className={`${styles.sliderImage}`} />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
