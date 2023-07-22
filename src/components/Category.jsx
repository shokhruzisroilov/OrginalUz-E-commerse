import { styles } from '../util/style'
import { CategoryData } from './CategoryData'
function Category() {
	return (
		<div className='pt-10'>
			<button className={`${styles.btnPrimary} px-6 py-[10px]`}>
				Product Category
			</button>
			<div className='w-full pt-5 flex gap-x-8 justify-between'>
				{CategoryData.map(item => {
					return (
						<div className='bg-white w-[244px] min-h-max flex flex-col justify-center items-center cursor-pointer'>
							<img
								src={item.image}
								alt='item image'
								className='w-full h-[164px] object-cover'
							/>
							<button className='w-full py-2 bg-secondary text-primary text-[16px] font-[500] '>
								{item.text}
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default Category
