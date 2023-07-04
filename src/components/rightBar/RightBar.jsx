import React, { useEffect, useState } from 'react'
import "./rightbar.css"
import axios from 'axios';
import { Link } from 'react-router-dom'  
import CommunityService from '../../services/CommunityService';
import PostService from '../../services/PostService';

export default function RightBar() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [pdf, setPDF] = useState('');
  const [communities, setCommunities] = useState([]);
  const [posts, setPosts] = useState([]);


  const search = async (val) => {
    const params = {};
    if (pdf) {
      params.pdfContent = pdf;
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
  const searchPost = async (val) => {
    const paramsPost = {};
    if (pdf) {
      paramsPost.pdfContent = pdf;
    }
    if (name) {
      paramsPost.title = name;
    }
    if (desc) {
      paramsPost.text = desc;
    }
    try {
      const response = await PostService.searchPosts(paramsPost);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = async (e) => {
    search(e.target.value);
  };
  const onChangeHandlerPosts = async (e) => {
    searchPost(e.target.value);
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
            placeholder="Search by Name/Title"
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Search by Description/Text"
          />
          <input
            type="text"
            value={pdf}
            onChange={(e) => setPDF(e.target.value)}
            placeholder="Search by PDF content"
          />
          <button onClick={onChangeHandler}>Search Communities</button>
          <button onClick={onChangeHandlerPosts}>Search Posts</button>

          <ul className="communityList">
          {communities.map(community => (
            
          <li><a href={`/community/${community.id}`}>r/ {community.name} Karma: {community.karma} Posts: {community.count} {community.fileName}</a></li>
          ))}
          {posts.map(post => (
            
          <li>r/ {post.title} text: {post.text}</li>
          ))}
        </ul>
        </div>
    </div>
  )
}
