const DetailText = ({ title, icon }) => {
	return (
		<span className='flex items-center gap-2'>
			<div className='text-xl text-orange-300'>{icon}</div>
			<p className='py-1'>{title}</p>
		</span>
	)
}

export default DetailText
