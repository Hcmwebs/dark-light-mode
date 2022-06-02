import React from 'react'

const Button = ({ MdLightMode, MdDarkMode, toggleTheme, active}) => {
	return (
		<>
			<div
				className={`${active ? 'toggle light' : 'toggle dark'}`}
				onClick={toggleTheme}>
				<MdDarkMode className='moon' />
				<div className='marker'></div>
				<MdLightMode className='sun' />
			</div>
		</>
	)
}

export default Button
