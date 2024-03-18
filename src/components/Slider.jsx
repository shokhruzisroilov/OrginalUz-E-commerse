// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules'
export default function Slider({ image1, image2, image3, image4, image5 }) {
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
						<img src={image1} className='w-full object-cover' />
					</div>
				</SwiperSlide>
				{image2 !== null && (
					<SwiperSlide>
						<div className='swiper-zoom-container'>
							<img src={image2} className='w-full object-cover' />
						</div>
					</SwiperSlide>
				)}
				{image3 !== null && (
					<SwiperSlide>
						<div className='swiper-zoom-container'>
							<img src={image3} className='w-full object-cover' />
						</div>
					</SwiperSlide>
				)}

				{image4 !== null && (
					<SwiperSlide>
						<div className='swiper-zoom-container'>
							<img src={image4} className='w-full object-cover' />
						</div>
					</SwiperSlide>
				)}
				{image5 !== null && (
					<SwiperSlide>
						<div className='swiper-zoom-container'>
							<img src={image5} className='w-full object-cover' />
						</div>
					</SwiperSlide>
				)}
			</Swiper>
		</>
	)
}
