import React from 'react'
import SinglePost from './SinglePost'

const Main = ({ posts }) => {
	return (
		<main className='container'>
			{posts.map((post) => {
				return <SinglePost key={post.id} {...post} />
			})}
		</main>
	)
}

export default Main
