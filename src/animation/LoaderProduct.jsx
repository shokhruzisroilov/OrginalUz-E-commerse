const LoaderProductUI = () => {
	return (
		<div className='w-full h-[348px] bg-gray-200 border-[1px] border-gray-300'>
			<div className='h-[200px] bg-white'></div>
			<div className='px-2'>
				<div className='bg-white mt-[10px] w-[40%] h-3'> </div>
				<div className='bg-white mt-2 h-4 w-[60%]'> </div>
				<div className='bg-white mt-3 h-8'> </div>
				<div className=' mt-3 h-10 flex justify-between items-center p-1'>
					<div className='bg-white w-20 h-4'></div>
					<div className='bg-white w-20 h-full'></div>
				</div>
			</div>
		</div>
	)
}

const LoaderProduct = () => {
	return (
		<div className='w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-10'>
			<LoaderProductUI />
			<LoaderProductUI />
			<LoaderProductUI />
			<LoaderProductUI />
		</div>
	)
}

export default LoaderProduct
