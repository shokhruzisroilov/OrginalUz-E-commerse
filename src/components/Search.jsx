import { useState } from 'react'
import { styles } from '../util/style'
import { useDispatch } from 'react-redux'
import { searchedProduct } from '../app/features/products/productsSlice'
function Search() {
	const [search, setSearch] = useState('')
	const dispatch = useDispatch()

	const searchProducts = () => {
		dispatch(searchedProduct(search))
	}

	return (
		<div className='flex justify-center'>
			<div className='w-full max-w-[700px] h-[45px] mt-5 flex items-center justify-center shadow-shadowSearch'>
				<input
					type='text'
					className=' bg-white text-[#9A9999] text-[14px] font-normal leading-[16px] outline-none px-4 w-full h-full '
					placeholder='Mahsulotlarni izlash...'
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							searchProducts()
						}
					}}
				/>
				<button
					className={`${styles.btnPrimary} border-none px-6 py-3`}
					onClick={searchProducts}
				>
					Izlash
				</button>
			</div>
		</div>
	)
}

export default Search
