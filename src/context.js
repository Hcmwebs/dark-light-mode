import React, { useState, useEffect,useContext } from 'react'

const AppContext = React.createContext()

const getLocalStorageTheme = () => {
	let theme = 'light-theme'
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme
}

const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState(getLocalStorageTheme())
	const [active, setActive] = useState(false)

	const toggleTheme = () => {
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
		<AppContext.Provider value={{ theme, active, toggleTheme }}>
			{children}
		</AppContext.Provider>
	)
}

//custom hook

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
