import React from 'react'
import {useGlobalContext} from '../context'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const Button = () => {
	const {toggleTheme,active} = useGlobalContext();

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
