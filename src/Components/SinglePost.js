import React from 'react'
import moment from 'moment'

const SinglePost = ({ title, length, body, userId, date }) => {
	return (
		<>
			<article className='post'>
				<h3>{title.slice(0, 20)}</h3>
				<div className='post-info'>
					<span>{moment(date).format('dddd Do YYYY')}</span>
					<span>{length} min read</span> <span>Written by {userId}</span>
				</div>
				<p>{body}</p>
			</article>
		</>
	)
}

export default SinglePost
