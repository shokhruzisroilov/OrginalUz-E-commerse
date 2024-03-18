import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './skeletons.css'
import './LoaderProduct.css'

const LoaderProduct = () => {
	return (
		<div className='c-item'>
			<div className='c-item__top'>
				<div className='c-skeleton-square' />
			</div>
			<div className='c-item__center'>
				<h3>
					<div className='c-skeleton-line' />
					<div className='c-skeleton-line' />
				</h3>
			</div>
			<div className='c-item__bottom'>
				<div className='c-skeleton-line' />
				<div className='c-skeleton-line' />
			</div>
			<div className='c-item__add'>
				<div className='c-skeleton-square' />
			</div>
		</div>
	)
}

export default LoaderProduct
