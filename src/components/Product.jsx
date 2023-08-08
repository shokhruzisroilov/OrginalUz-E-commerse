import { Link } from 'react-router-dom'
import laptop from '../assets/simple.png'
import bagBuy from '../assets/svg/bag-plus.svg'
import { styles } from '../util/style'

function Product() {
	return (
		<Link to='/shoping'>
			<div
				className='bg-white p-[10px] cursor-pointer shadow-shadowProduct'
				
			>
				<img
					src={laptop}
					alt='laptop products'
					className='w-full object-cover'
				/>
				<h4 className='text-[#9C9C9C] pt-[10px] text-[12px] font-light leading-normal	'>
					Laptop & PC
				</h4>
				<h3 className='text-textColor text-[16px] font-normal leading-[150%]'>
					ASUS X441UV{' '}
				</h3>
				<p className='text-textColor text-[12px] font-light'>
					consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
					commodo....
				</p>
				<span className='pt-[12px] flex justify-between'>
					<p className='text-black text-14px font-[500] leading-normal'>
						$ 2,800
					</p>
					<div
						className={`${styles.btnSecondary} flex items-center gap-x-2 px-[10px] py-1`}
					>
						<p>Buy</p>
						<img src={bagBuy} alt='buy icon' />
					</div>
				</span>
			</div>
		</Link>
	)
}

export default Product
