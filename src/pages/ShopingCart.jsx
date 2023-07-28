import { styles } from "../util/style"
import { Link } from "react-router-dom"
import visa from '../assets/svg/visa.svg'
import payPal from '../assets/svg/pay-pal.svg'
import masterCard from '../assets/svg/master-card.svg'
import Slider from "../components/Slider"

function ShopingCart() {
	return (
		<div className='w-full my-[75px] bg-mainBg'>
			<div
				className={`${styles.container} lg:flex items-center  gap-y-20 gap-x-[120px] pt-14 overflow-hidden`}
			>
				<div className='max-w-[600px]'>
					<Slider />
				</div>
				<div className='mt-10 lg:0'>
					<h3 className='text-textColor text-[18px] font-normal '>nomi</h3>
					<h2 className='text-textColor sm:text-[28px] text-[24px] font-[400] leading-normal'>
						Basic hooded sweatshirt in pink
					</h2>
					<p className='max-w-[500px] text-textColor text-[16px] font-light py-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						placeat, impedit, est cupiditate dolores provident eum veniam ad
						quod voluptatibus consequatur.
					</p>
					<p>Cost: 200$</p>
					<form className='mt-6'>
						<p className=' text-textColor text-[16px] font-normal'>select:</p>
						<select className='xs:w-[348px] w-[250px] bg-white py-3 px-4 outline-none mt-2 border-2 rounded border-gray-400'>
							<option value=''>Please select</option>
							<option value=''>Please select</option>
							<option value=''>Please select</option>
							<option value=''>Please select</option>
						</select>
						<div className='py-10 flex col-x-10'>
							<input
								type='number'
								placeholder='1'
								className='xs:max-w-[180px] max-w-[80px] border-2 rounded border-gray-400  py-3 px-4 outline-none mr-6'
							/>
							<div className=''>
								<Link
									href='#'
									className='flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300'
								>
									Add to cart
								</Link>
							</div>
						</div>
					</form>
					<div className='flex flex-wrap gap-6 cursor-pointer'>
						<img src={visa} alt='visa' />
						<img src={payPal} alt='pay-pal' />
						<img src={masterCard} alt='master-cart' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShopingCart