import React from 'react'
import "./rightbar.css"

export default function RightBar() {
  return (
    <div className='rightBar'>
      <div className="rightWrapper">
        <div className="picturetop">
        <img src="/assets/herbs.png" alt="" className="herbPic" />
        <hr/>

        <button className="addCommunityButton">Create community</button>

        </div>
        
      </div>
    </div>
  )
}
