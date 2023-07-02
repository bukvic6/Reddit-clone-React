import React, { useEffect, useState } from 'react'
import "./rightbar.css"
import axios from 'axios';
import { Link } from 'react-router-dom'  
import CommunityService from '../../services/CommunityService';

export default function RightBar() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [pdf, setPDF] = useState('');
  const [communities, setCommunities] = useState([]);


  const search = async (val) => {
    const params = {};
    if (pdf) {
      params.pdf = pdf;
    }
    if (name) {
      params.name = name;
    }
    if (desc) {
      params.description = desc;
    }
    try {
      const response = await CommunityService.searchCommunities(params);
      setCommunities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = async (e) => {
    search(e.target.value);
  };


  return (
    <div className='rightBar'>
      <div className="rightWrapper">
        <div className="picturetop">
        <img src="/assets/herbs.png" alt="" className="herbPic" />
        <hr/>

        <Link to='/createComm' className="addCommunityButton">Create community</Link>

        </div>
        
      </div>
      <div className="searchContainer">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search by Name"
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Search by description"
          />
          <input
            type="text"
            value={pdf}
            onChange={(e) => setPDF(e.target.value)}
            placeholder="Search by PDF"
          />
          <button onClick={onChangeHandler}>Search</button>
          <ul className="communityList">
          {communities.map(community => (
            
          <li><a href={`/community/${community.id}`}>r/ {community.name}{community.id}</a></li>
          ))}
        </ul>
        </div>
    </div>
  )
}
