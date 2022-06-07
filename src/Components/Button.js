import React from 'react'

const Button = ({ MdLightMode, MdDarkMode, toggleTheme, active }) => {

	return (
		<>
			<div
				className={`${active ? 'toggle dark' : 'toggle light'}`}
				onClick={toggleTheme}>
				<MdDarkMode className='moon' />
				<div className='marker'></div>
				<MdLightMode className='sun' />
			</div>
		</>
	)
}

export default Button
