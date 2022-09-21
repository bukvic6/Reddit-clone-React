import React from 'react'
import "./post.css"
import { ThumbUp } from '@mui/icons-material'
import { ThumbDown } from '@mui/icons-material'

const Post = ({data}) => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src="/assets/rebbitLogo.png" alt="" className="profilePic" />
                    <span className="userName">{data.username}</span>
                    <span className="postDate">21.september 2022.</span>
                </div>
            </div>
            <hr/>
            <div className="postMiddle">
                <span className="postText">{data.text}</span>
            </div>
        
            <div className="postOptions">
                <div className="bottomLeft">
                <ThumbUp className='upvote'/>
                <span className="karma">200</span>
                <ThumbDown className='downvote'/>
                </div>
                <div className="bottomRight">
                    <span className="postComments">10 comments</span>
                </div>

            </div>


        </div>
    </div>
  )
}
export default Post
