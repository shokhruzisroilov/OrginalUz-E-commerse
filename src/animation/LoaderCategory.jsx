// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const LoaderCategory = () => {
	return (
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
			<SwiperSlide className='max-w-[168px] flex justify-center items-center'>
				<div className='w-[168px] h-[168px] bg-gray-200 border-[1px] border-gray-300'>
					<div className='h-[120px] bg-white'></div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='max-w-[168px] flex justify-center'>
				<div className='w-[168px] h-[168px] bg-gray-200 border-[1px] border-gray-300'>
					<div className='h-[120px] bg-white'></div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='max-w-[168px] flex justify-center'>
				<div className='w-[168px] h-[168px] bg-gray-200 border-[1px] border-gray-300'>
					<div className='h-[120px] bg-white'></div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='max-w-[168px] flex justify-center'>
				<div className='w-[168px] h-[168px] bg-gray-200 border-[1px] border-gray-300'>
					<div className='h-[120px] bg-white'></div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='max-w-[168px] flex justify-center'>
				<div className='w-[168px] h-[168px] bg-gray-200 border-[1px] border-gray-300'>
					<div className='h-[120px] bg-white'></div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='max-w-[168px] flex justify-center'>
				<div className='w-[168px] h-[168px] bg-gray-200 border-[1px] border-gray-300'>
					<div className='h-[120px] bg-white'></div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='max-w-[168px] flex justify-center'>
				<div className='w-[168px] h-[168px] bg-gray-200 border-[1px] border-gray-300'>
					<div className='h-[120px] bg-white'></div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default LoaderCategory
