import React from 'react'
import { useEffect, useState} from 'react'
import CommunityService from '../../services/CommunityService';
import "./sidebar.css"

const SideBar = () =>{
  const [communities, setCommunities] = useState([]);

  const fetchData = async () => {
    const { data } = await CommunityService.getCommunities();
    setCommunities(data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className='sideBar'>
        <div className="wrapperClass"></div>
        
        <h4>Communities</h4>
        <hr/>
        <ul className="communityList">
          {communities.map(community => (
            
          <li><a href={`/community/${community.id}`}>r/ {community.name}</a></li>
          ))}
         
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr/>
    
    </div>
    
  )
}
export default SideBar
