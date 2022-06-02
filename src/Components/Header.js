import React from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import Button from './Button'

const Header = ({ toggleTheme }) => {
	return (
		<>
			<header>
				<div className='container'>
					<h1>The Fuse</h1>
					<Button
						MdLightMode={MdLightMode}
						MdDarkMode={MdDarkMode}
						toggleTheme={toggleTheme}
					/>
				</div>
			</header>
		</>
	)
}

export default Header
