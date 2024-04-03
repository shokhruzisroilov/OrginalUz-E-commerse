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

export default function AddToCart() {
	const shoping = useSelector(state => state.shoping.active)
	const { baskets, isLoadingBasket, errorBasket, basketMessage } = useSelector(
		state => state.baskets
	)
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
													</ul>
												</div>
											</div>
										</div>

										<div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
											<div className='flex justify-between text-base font-medium text-gray-900'>
												<p>Umumiy narxi</p>
												<p>$262.00</p>
											</div>
											<div className='mt-6'>
												<Link
													to='/'
													className='flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300'
												>
													Sotib olish
												</Link>
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
