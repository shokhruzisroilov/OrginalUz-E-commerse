import { styles } from '../util/style'
import { Link, useParams } from 'react-router-dom'
import { AddToCart } from '../components'
import Slider from '../components/Slider'
import { productsData } from '../util/productsData'
import { useEffect } from 'react'

function ShopingCart() {
	let { postId } = useParams()
	console.log(postId)
	const dataFilter = productsData.filter(item => {
		if (item.id == postId) {
			return item
		}
	})

	const ScrollToTop = () => {
		useEffect(() => {
			window.scrollTo(0, 0)
		}, [])

		return null
	}

	return (
		dataFilter &&
		dataFilter.map((item, id) => {
			return (
				<div className='w-full my-[75px] bg-mainBg' key={item.id}>
					<ScrollToTop />
					<div className={`${styles.container} pt-4 flex items-start`}>
						<Link
							to='/'
							className='flex items-center gap-x-2 bg-primary px-2 rounded-[10px] text-white'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-arrow-left'
								viewBox='0 0 16 16'
							>
								{' '}
								<path
									fill-rule='evenodd'
									d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
								/>{' '}
							</svg>
							<p>Orqaga</p>
						</Link>
					</div>
					<div
						className={`${styles.container} lg:flex items-center  gap-y-20 gap-x-[120px] pt-10 overflow-hidden`}
					>
						<div className='max-w-[600px]'>
							<Slider image={item.image} />
						</div>
						<div className='mt-10 lg:0'>
							<h3 className='text-textColor text-[18px] font-normal '>
								{item.type}
							</h3>
							<h2 className='text-textColor sm:text-[28px] text-[24px] font-[400] leading-normal'>
								{item.name}
							</h2>
							<p className='max-w-[500px] text-textColor text-[16px] font-light py-2'>
								{item.descreption}
							</p>
							<p>Narxi: {item.price}</p>
							<form className='mt-6'>
								<div className=''>
									<Link
										href='#'
										className='flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300'
									>
										Savatga qo'shish
									</Link>
								</div>
							</form>
						</div>
					</div>
					<AddToCart />
				</div>
			)
		})
	)
}

export default ShopingCart
