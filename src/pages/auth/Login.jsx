import { Link } from 'react-router-dom'
import { Input } from '../../components/index'

function Login() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center items-start px-6 py-12 lg:px-8'>
			<Link
				to='/'
				className='flex items-center gap-x-2 bg-primary px-2 rounded-[10px] text-white'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					class='bi bi-arrow-left'
					viewBox='0 0 16 16'
				>
					{' '}
					<path
						fill-rule='evenodd'
						d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
					/>{' '}
				</svg>
				<p>Orqaga</p>
			</Link>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Akountingizga kiring
				</h2>
			</div>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' action='#' method='POST'>
					<Input label={'Emailingiz'} type={'email'} />
					<Input label={'Parolingiz'} type={'password'} />
					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400'
						>
							Kirish
						</button>
					</div>
				</form>
				<p class='mt-10 text-center text-sm text-gray-500'>
					Akountingiz bo'lmasa ro'yhatdan o'ting?{'  '}
					<Link
						to='/register'
						class='font-semibold leading-6 text-orange-300 hover:text-orange-400'
					>
						Ro'yhatdan o'tish
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
