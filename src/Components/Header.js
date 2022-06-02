import React from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import Button from './Button'


const Header = ({toggleTheme}) => {
	return (
		<div className='container'>
			<header>
				<h1>The Fuse</h1>
				<Button MdLightMode={MdLightMode} MdDarkMode={MdDarkMode} toggleTheme ={toggleTheme}/>
			</header>
		</div>
	)
}

export default Header
