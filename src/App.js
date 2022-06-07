import React from 'react'
import posts from './db/data'

import Header from './Components/Header'
import Main from './Components/Main'

const App = () => {
	return (
		<>
			<Header />
			<Main posts={posts} />
		</>
	)
}

export default App
