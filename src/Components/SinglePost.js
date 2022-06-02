import React from 'react'

const SinglePost = ({ title, length, body, userId }) => {
	return (
		<>
			<article className='post'>
				<h3>{title}</h3>
				<div className='post-info'>
					<span>date</span>
					<span>{length} min read</span>
          <span>userId</span>
				</div>
				<p>{body}</p>

			</article>
		</>
	)
}

export default SinglePost
