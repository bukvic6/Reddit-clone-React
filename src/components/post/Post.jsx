import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src="/assets/rebbitLogo.png" alt="" className="profilePic" />
                    <span className="userName">Marko Markovic</span>                    <span className="userName">Marko Markovic</span>
                    <span className="userName">21.september 2022.</span>

                </div>
            </div>
            <div className="postMiddle"></div>
            <div className="postOptions"></div>


        </div>
    </div>
  )
}
