import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { handelClicker } from '../app/features/state/shopingSlice'
import closeMenu from '../assets/svg/close-menu.svg'
import { MdDelete } from 'react-icons/md'
import BasketsService from '../service/basket'
import {
	getBasketFailure,
	getBasketStart,
	getBasketSuccess,
} from '../app/features/basket/basketSlice'
import ProductService from '../service/products'
import { createProductsOrder } from '../app/features/products/productsSlice'

export default function AddToCart() {
	const shoping = useSelector(state => state.shoping.active)
	const { baskets, isLoadingBasket, basketMessage } = useSelector(
		state => state.baskets
	)
	const { orderProducts } = useSelector(state => state.products)
	// console.log(orderProducts)

	const dispatch = useDispatch()

	// get basket
	const getBaskets = async () => {
		dispatch(getBasketStart())
		try {
			const response = await BasketsService.getBaskets()
			dispatch(getBasketSuccess(response))
		} catch (error) {
			dispatch(getBasketFailure(error))
			console.log(error)
		}
	}

	useEffect(() => {
		getBaskets()
	}, [basketMessage])

	// delete basket
	const deleteBasket = async slug => {
		try {
			await BasketsService.deleteBasket(slug)
			getBaskets()
		} catch (error) {
			console.log(error)
		}
	}
	// total price function
	const totalPrice = () => {
		let total = 0
		baskets &&
			baskets.map(basket => {
				total += basket.product.price
			})
		return total
	}

	// create products order
	const createProductOrder = async () => {
		try {
			const response = await ProductService.createProductOrder()
			dispatch(createProductsOrder(response))
			getBaskets()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Transition.Root show={shoping} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={() => dispatch(handelClicker())}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'
							>
								<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
									<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
										<div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
											<div className='flex items-start justify-between'>
												<Dialog.Title className='text-lg font-medium text-gray-900'>
													Xarid savati
												</Dialog.Title>
												<div className='ml-3 flex h-7 items-center'>
													<button
														type='button'
														className='-m-2 p-2 text-gray-400 hover:text-gray-500'
														onClick={() => dispatch(handelClicker())}
													>
														<span className='sr-only'>Close panel</span>
														<img
															src={closeMenu}
															alt='close icon'
															className='h-6 w-6'
															aria-hidden='true'
														/>
													</button>
												</div>
											</div>

											<div className='mt-8'>
												<div className='flow-root'>
													<ul
														role='list'
														className='-my-6 divide-y divide-gray-200'
													>
														{isLoadingBasket ? (
															<div className='flex items-center justify-center'>
																<div
																	className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-orange-400'
																	role='status'
																>
																	<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
																		Loading...
																	</span>
																</div>
															</div>
														) : (
															baskets.map(basket => (
																<li key={basket.id} className='flex py-6'>
																	<Link
																		to={`/shoping/${basket.product.id}`}
																		onClick={() => dispatch(handelClicker())}
																	>
																		<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
																			<img
																				src={basket.product.image1}
																				alt={basket.product.title}
																				className='h-full w-full object-cover object-center'
																			/>
																		</div>
																	</Link>

																	<div className='ml-4 flex flex-1 flex-col'>
																		<div>
																			<div className='flex justify-between text-base font-medium text-gray-900'>
																				<h3>{basket.product.title}</h3>
																				<p className='ml-4'>
																					{basket.product.price} so'm
																				</p>
																			</div>
																			<p className='mt-1 text-sm text-gray-500'>
																				{basket.product.category.title}
																			</p>
																		</div>
																		<div className='flex flex-1 items-end justify-between text-sm'>
																			<div className='flex'>
																				<MdDelete
																					className='text-2xl text-red-400 cursor-pointer'
																					onClick={() =>
																						deleteBasket(basket.id)
																					}
																				/>
																			</div>
																		</div>
																	</div>
																</li>
															))
														)}
														{/* {baskets.length === 0 && orderProducts !== null && (
															<div className='py-5 w-full flex items-center justify-center'>
																<p className='font-medium text-gray-500'>
																	{orderProducts}
																</p>
															</div>
														)} */}
														{
															orderProducts.error_message && <div class="bg-gray-100 h-screen">
															<div class="bg-white p-6  md:mx-auto">
															  <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
																  <path fill="currentColor"
																	  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
																  </path>
															  </svg>
															  <div class="text-center">
																  <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
																  <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
																  <p> Have a great day!  </p>
																  <div class="py-10 text-center">
																	  <a href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
																		  GO BACK 
																	 </a>
																  </div>
															  </div>
														  </div>
														</div>
														}
													</ul>
												</div>
											</div>
										</div>

										<div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
											<div className='flex justify-between text-base font-medium text-gray-900'>
												<p>Umumiy narxi</p>
												<p>{totalPrice()} so'm</p>
											</div>
											<div className='mt-6'>
												<button
													type='submit'
													className='w-full flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300'
													onClick={createProductOrder}
												>
													Sotib olish
												</button>
											</div>
											<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
												<p>
													yoki
													<Link
														to='/'
														type='button'
														className='font-medium text-orange-500 hover:text-orange-400'
														onClick={() => dispatch(handelClicker())}
													>
														<span aria-hidden='true'> &rarr;</span> Xarid
														qilishda davom eting
													</Link>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
