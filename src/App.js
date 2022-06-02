import React, { useState, useEffect } from 'react'
import posts from './db/data'

import Header from './Components/Header'
import Main from './Components/Main'

const getLocalStorageTheme = () => {
	let theme = 'light-theme'
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme
}

const App = () => {
	const [theme, setTheme] = useState(getLocalStorageTheme())
	const [active, setActive] = useState(false)

	const toggleTheme = () => {
		console.log('clicked')
		if (theme === 'light-theme') {
			setTheme('dark-theme')
			setActive(true)
		} else {
			setTheme('light-theme')
			setActive(false)
		}
	}
	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<div className={theme}>
			<Header toggleTheme={toggleTheme} active={active} />
			<Main posts={posts} />
		</div>
	)
}

export default App
