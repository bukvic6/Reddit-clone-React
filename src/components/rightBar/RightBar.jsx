import React from 'react'
import "./rightbar.css"
import { Link } from 'react-router-dom'  

export default function RightBar() {
  
  return (
    <div className='rightBar'>
      <div className="rightWrapper">
        <div className="picturetop">
        <img src="/assets/herbs.png" alt="" className="herbPic" />
        <hr/>

        <Link to='/createComm' className="addCommunityButton">Create community</Link>

        </div>
        
      </div>
    </div>
  )
}
