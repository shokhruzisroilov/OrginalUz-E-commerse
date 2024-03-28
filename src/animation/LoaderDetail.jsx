import { styles } from '../util/style'

const LoaderDetail = () => {
	return (
		<div
			className={`${styles.container} sm:flex items-start gap-10  lg:gap-y-20 lg:gap-x-[120px] pt-10 overflow-hidden`}
		>
			<div className='lg:w-[500px] sm:w-[400px] lg:h-[500px] sm:h-[400px] max-sm:w-full max-sm:h-[400px] bg-gray-200'></div>
			<div className='mt-10 w-1/2 max-sm:w-full h-full'>
				<h3 className='w-[30%] bg-gray-200 h-4'></h3>
				<h2 className='w-[40%] bg-gray-200 h-6 mt-4'></h2>
				<p className='w-full bg-gray-200 h-4 mt-6'></p>
				<p className='w-full bg-gray-200 h-4 mt-2'></p>
				<p className='w-full bg-gray-200 h-4 mt-2'></p>
				<p className='w-full bg-gray-200 h-4 mt-2'></p>
				<p className='w-[30%] bg-gray-200 h-4 mt-6'></p>
				<div className='w-[50%] bg-gray-200 h-10 mt-6'></div>
				<div className='w-full bg-gray-200 h-10 mt-6'></div>
			</div>
		</div>
	)
}

export default LoaderDetail
