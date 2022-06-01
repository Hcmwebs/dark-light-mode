import React from 'react'
import './index.scss'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import Button from '../Button/Button'

const Header = () => {
	return (
		<div className='container'>
			<header>
				<h1>The Fuse</h1>
				<Button MdLightMode={MdLightMode} MdDarkMode={MdDarkMode} />
			</header>
		</div>
	)
}

export default Header
