import React from 'react'
import './index.scss'

const Button = ({MdLightMode,MdDarkMode}) => {
	return (
		<>
			<div className='toggle'>
				<MdDarkMode className='moon' />
				<div className='marker'></div>
				<MdLightMode className='sun' />
			</div>
		</>
	)
}

export default Button
