import { styles } from '../util/style'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AddToCart, DetailText } from '../components'
import Slider from '../components/Slider'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductService from '../service/products'
import {
	getProductDetailsFailure,
	getProductDetailsStart,
	getProductDetailsSuccess,
} from '../app/features/products/productsSlice'
import LoaderDetail from '../animation/LoaderDetail'

import { IoIosResize } from 'react-icons/io'
import { TbTruckDelivery } from 'react-icons/tb'
import {
	MdOutlineHighQuality,
	MdOutlinePriceChange,
	MdOutlineRealEstateAgent,
} from 'react-icons/md'
import BasketsService from '../service/basket'
import {
	addBasketFailure,
	addBasketStart,
	addBasketSuccess,
} from '../app/features/basket/basketSlice'

// alert message
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ShopingCart() {
	const { postId } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { isLoading, productDetail, error } = useSelector(
		state => state.products
	)
	const { loggedIn } = useSelector(state => state.auth)
	const { basketMessage, isLoadingBasket, errorBasket } = useSelector(
		state => state.baskets
	)

	const getProductDetails = async () => {
		dispatch(getProductDetailsStart())
		try {
			const response = await ProductService.getProductsDetail(postId)
			dispatch(getProductDetailsSuccess(response))
		} catch (error) {
			dispatch(getProductDetailsFailure(error))
		}
	}

	useEffect(() => {
		getProductDetails()
	}, [postId])

	const addProductBasket = async slug => {
		dispatch(addBasketStart())
		try {
			const response = await BasketsService.addProductBasket(slug)
			dispatch(addBasketSuccess(response))
		} catch (error) {
			dispatch(addBasketFailure(error))
			console.log(errorBasket)
		}
	}

	const addToCartProduct = id => {
		if (!loggedIn) {
			navigate('/login')
		} else {
			addProductBasket(id)
			toast.success("Mahsulot savatga qo'shildi!")
		}
	}

	const ScrollToTop = () => {
		useEffect(() => {
			window.scrollTo(0, 0)
		}, [])
		return null
	}

	return (
		<div className='w-full mt-[75px] bg-mainBg'>
			<ScrollToTop />
			<ToastContainer />
			<div className={`${styles.container} pt-4 flex items-start`}>
				<Link
					to='/'
					className='flex items-center gap-x-2 bg-primary px-2 rounded-[10px] text-white'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={16}
						height={16}
						fill='currentColor'
						className='bi bi-arrow-left'
						viewBox='0 0 16 16'
					>
						{'{'}' '{'}'}
						<path
							fillRule='evenodd'
							d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
						/>
						{'{'}' '{'}'}
					</svg>

					<p>Orqaga</p>
				</Link>
			</div>
			<>
				{isLoading && <LoaderDetail />}
				{error !== null && <p className='text-center'>Mahsulot topilmadi</p>}
			</>
			{!isLoading && !error && productDetail && (
				<div
					className={`${styles.container} sm:flex items-start gap-10  lg:gap-y-20 lg:gap-x-[120px] py-10 overflow-hidden`}
				>
					<div className='lg:w-[500px] sm:w-[400px] select-none'>
						<Slider
							image1={productDetail.image1}
							image2={productDetail.image2}
							image3={productDetail.image3}
							image4={productDetail.image4}
							image5={productDetail.image5}
						/>
					</div>
					<div className='mt-10 lg:0'>
						<h3 className='text-textColor text-[18px] font-normal '>
							{productDetail.category?.title}
						</h3>
						<h2 className='text-textColor sm:text-[28px] text-[24px] font-[400] leading-normal'>
							{productDetail.title}
						</h2>
						<p className='text-textColor text-[16px] font-light py-2'>
							{productDetail.description}
						</p>

						<DetailText title={productDetail.size} icon={<IoIosResize />} />
						<DetailText
							title={'Sifat: Yuqori'}
							icon={<MdOutlineHighQuality />}
						/>
						<DetailText
							title={productDetail.state}
							icon={<MdOutlineRealEstateAgent />}
						/>
						<DetailText
							title={`Narxi: ${productDetail.price} so'm`}
							icon={<MdOutlinePriceChange />}
						/>
						<DetailText
							title={"Yetkazib berish: Yurtimiz bo'ylab bepul!"}
							icon={<TbTruckDelivery />}
						/>
						<button
							className='w-full flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300 mt-6'
							type='submit'
							disabled={isLoadingBasket}
							onClick={() => addToCartProduct(productDetail.id)}
						>
							{isLoadingBasket ? 'Yuklanmoqda...' : "Savatga qo'shish"}
						</button>
					</div>
				</div>
			)}

			<AddToCart />
		</div>
	)
}

export default ShopingCart
