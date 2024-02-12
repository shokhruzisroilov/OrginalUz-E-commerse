import { styles } from '../util/style'
import { Link } from 'react-router-dom'
import { bagBuy } from '../constants/index'

function Product({ id, image, type, name, descreption, price }) {
	return (
		<Link to={`/shoping/${id}`}>
			<div className='bg-white p-[10px] cursor-pointer hover:shadow-shadowProduct'>
				<img src={image} alt={name} className='w-full object-cover' />
				<h4 className='text-[#9C9C9C] pt-[10px] text-[12px] font-light leading-normal	'>
					{type}
				</h4>
				<h3 className='text-textColor text-[16px] font-normal leading-[150%]'>
					{name}
				</h3>
				<p className='text-textColor text-[12px] font-light'>{descreption}</p>
				<span className='pt-[12px] flex justify-between'>
					<p className='text-black text-14px font-[500] leading-normal'>
						{price}
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
