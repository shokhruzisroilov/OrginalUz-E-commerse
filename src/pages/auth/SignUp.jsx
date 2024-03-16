import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/index'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthService from '../../service/auth'
import { registerUserStart, registerUserSuccess } from '../../app/features/auth'

function SignUp() {
	const [username, setUsername] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isLoading, loggedIn } = useSelector(store => store.auth)

	const registerHandler = async e => {
		e.preventDefault()
		dispatch(registerUserStart())
		const user = {
			username: username,
			password1: password1,
			password2: password2,
		}
		try {
			const response = await AuthService.userRegister(user)
			// dispatch(registerUserSuccess(response))
			console.log(response)
			navigate('/')
		} catch (error) {
			console.log('Error', error.response.data)
		}
	}
	// useEffect(() => {
	// 	if (loggedIn) {
	// 		navigate('/')
	// 	}
	// }, [loggedIn])

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
					className='bi bi-arrow-left'
					viewBox='0 0 16 16'
				>
					{' '}
					<path
						fillRule='evenodd'
						d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
					/>{' '}
				</svg>
				<p>Orqaga</p>
			</Link>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Ro'yhatdan o'tish
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' onSubmit={registerHandler}>
					<Input
						label={'Telfon nomer'}
						type={'tel'}
						placeholder={'+998 9X XXX XX XX'}
						state={username}
						setState={setUsername}
					/>
					<Input
						label={'Parol yarating'}
						type={'password'}
						placeholder={''}
						state={password1}
						setState={setPassword1}
					/>
					<Input
						label={'Parolingizni qayta kiriting'}
						type={'password'}
						placeholder={''}
						state={password2}
						setState={setPassword2}
					/>
					<button
						type='submit'
						disabled={isLoading}
						className='flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400'
					>
						{isLoading ? 'Yuklanmoqda...' : "Ro'yhatdan o'tish"}
					</button>
				</form>
				<p className='mt-10 text-center text-sm text-gray-500'>
					Akountingiz bo'lsa Kirishni bosing{'  '}
					<Link
						to='/login'
						className='font-semibold leading-6 text-orange-300 hover:text-orange-400'
					>
						Kirish
					</Link>
				</p>
			</div>
		</div>
	)
}

export default SignUp
