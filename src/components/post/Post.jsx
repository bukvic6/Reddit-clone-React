import React from 'react'
import "./post.css"
import { ThumbUp } from '@mui/icons-material'
import { ThumbDown } from '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src="/assets/rebbitLogo.png" alt="" className="profilePic" />
                    <span className="userName">Marko Markovic</span>
                    <span className="postDate">21.september 2022.</span>

                </div>
            </div>
            <hr/>
            <div className="postMiddle">
                <span className="postText">This is my first post!</span>
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
