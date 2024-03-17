function Input({ label, type, placeholder, state, setState }) {
	const id = `${type}-${Math.random().toString(36).substring(7)}`
	return (
		<div>
			<label
				htmlFor='email'
				className='block text-sm font-medium leading-6 text-gray-900'
			>
				{label}
			</label>
			<div className='mt-2'>
				<input
					id={id}
					name={type}
					type={type}
					autoComplete={type}
					required
					placeholder={placeholder}
					className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'
					value={state}
					onChange={e => setState(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default Input
