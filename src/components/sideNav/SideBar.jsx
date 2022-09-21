import React from 'react'
import "./sidebar.css"

export default function SideBar() {
  const communities = ['cats', 'dogs', 'funny', ' videos']
  
  return (
    <div className='sideBar'>
        <div className="wrapperClass"></div>
        
        <h4>Communities</h4>
        <hr/>
        <ul className="communityList">
          {communities.map(community => (
          <li><a href={`/r/${community}`}>{community}</a></li>
          ))}
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr/>
    
    </div>
    
  )
}
