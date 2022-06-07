import React, {useEffect } from 'react'
import posts from './db/data'

import Header from './Components/Header'
import Main from './Components/Main'
import {useGlobalContext} from './context'



const App = () => {
	const {theme} = useGlobalContext()

	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])


	return (
		<>
			<Header  />
			<Main posts={posts} />
		</>
	)
}

export default App
