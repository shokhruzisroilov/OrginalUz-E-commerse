import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/index'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthService from '../../service/auth'
import { registerUserStart, registerUserSuccess } from '../../app/features/auth'

function SignUp() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {isLoading, loggedIn} = useSelector(store => store.auth)

	const registerHandler = async e => {
		e.preventDefault()
		dispatch(registerUserStart())
		const user = { first_name: 'Shohruz', last_name: 'Isroilov', email: 'shohruz@gmail.com', role: 'user' }
		try {
			const response = await AuthService.userRegister(user)
			dispatch(registerUserSuccess(response.user))
			// navigate('/')	
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (loggedIn) {
			navigate('/')
		}
	}, [loggedIn])

	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<Link to='/' className='flex items-center gap-x-2'>
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
				<p>Back</p>
			</Link>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Register
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6'>
					<Input label={'Name'} type={'text'} state={name} setState={setName} />
					<Input
						label={'Email address'}
						type={'email'}
						state={email}
						setState={setEmail}
					/>
					<Input
						label={'Password'}
						type={'password'}
						state={password}
						setState={setPassword}
					/>
					<Input
						label={'Confirm Password'}
						type={'password'}
						state={password2}
						setState={setPassword2}
					/>
					<div>
						<button
							type='submit'
							disabled={isLoading}
							onClick={registerHandler}
							className='flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400'
						>
							{isLoading ? 'Loading...' : 'Register'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignUp
