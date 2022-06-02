import React from 'react'
import SinglePost from './SinglePost'

const Main = ({ posts }) => {
	return (
		<main>
			<div className='container'>
				{posts.map((post) => {
					return <SinglePost key={post.id} {...post} />
				})}
			</div>
		</main>
	)
}

export default Main
