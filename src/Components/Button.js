import React from 'react'

const Button = ({ MdLightMode, MdDarkMode }) => {
	return (
		<>
			<div className='toggle dark-mode'>
				<MdDarkMode className='moon' />
				<div className='marker'></div>
				<MdLightMode className='sun' />
			</div>
		</>
	)
}

export default Button
