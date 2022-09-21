import React from 'react'
import Post from '../post/Post'
import "./posts.css"

export default function Posts() {
  return (
    <div className='posts'>
      <div className="postWrapper">
        <Post/>
      </div>
    </div>
  )
}
