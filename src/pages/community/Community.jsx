import React, { useState } from 'react'
import { useEffect } from 'react'
import "./community.css"
import { useParams } from 'react-router-dom'
import CommunityService from '../../services/CommunityService'
import PostService from '../../services/PostService'
import Post from '../../components/post/Post'
import { Link } from 'react-router-dom'  


export default function Community() {

    const [community, setCommunity] = useState({})
    const [communityPosts, setPosts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if ( id ) {
            CommunityService.getCommunityById(id).then(res => {
                console.log(res)
                setCommunity(res.data)
            })
            PostService.getCommunityPosts(id).then(posts  => {
                console.log(posts)
                setPosts(posts.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },[ id ]);
  return (
    <div className="community">
        <div className="topDiv">
                        <div className="commName">
            <h4 className='naziv'>{community.name}</h4>
            <p>{community.description}</p>

            <p>Creation Date: {community.creationDate}</p>
            </div>
        </div>
        <div className="Wrapper">
        <div className="middleDiv">
                <div className="posts">
                    {communityPosts.length > 0 ? (
                <div>
                    {communityPosts.map((post,id)=>{
                    return <Post data={post} id = {id}/>
                })}
                </div>
                ) : (
                <p className="loading">Loading... </p>
                )}
            </div>
        </div>
        <div className="rightDiv">
            <div className="picturetop">
            <img src="/assets/herbs.png" alt="" className="herbPic" />
            <hr/>

            <Link to={`/createPost/${id}`} className="addCommunityButton">Create post</Link>

            </div>

        </div>
        </div>
        
    </div>
  )
}
