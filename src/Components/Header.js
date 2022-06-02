import React from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import Button from './Button'

const Header = ({ toggleTheme, active }) => {
	return (
		<>
			<header>
				<div className='container'>
					<h1>The Fuse</h1>
					<Button
						MdLightMode={MdLightMode}
						MdDarkMode={MdDarkMode}
						toggleTheme={toggleTheme}
						active ={active}
					/>
				</div>
			</header>
		</>
	)
}

export default Header
