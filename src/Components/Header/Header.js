import React from 'react'
import './index.scss'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import Button from '../Button/Button'

const Header = () => {
	return (
		<header className='container'>
			<h1>The Fuse</h1>
			<Button MdLightMode={MdLightMode} MdDarkMode={MdDarkMode} />
		</header>
	)
}

export default Header
