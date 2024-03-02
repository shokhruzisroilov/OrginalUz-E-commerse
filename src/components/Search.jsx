import { styles } from '../util/style'
function Search() {
	return (
		<div className='flex justify-center'>
			<div className='w-full max-w-[700px] h-[45px] mt-5 flex items-center justify-center shadow-shadowSearch'>
				<input
					type='text'
					className=' bg-white text-[#9A9999] text-[14px] font-normal leading-[16px] outline-none px-4 w-full h-full '
					placeholder='Mahsulotlarni izlash...'
				/>
				<button className={`${styles.btnPrimary} border-none px-6 py-3`}>
					Izlash
				</button>
			</div>
		</div>
	)
}

export default Search
