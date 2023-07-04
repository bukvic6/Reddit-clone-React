import React from 'react'
import axios from 'axios'
import "./post.css"
import { ThumbUp } from '@mui/icons-material'
import { ThumbDown } from '@mui/icons-material'
import PostService from '../../services/PostService'

const Post = ({data}) => {

    const handleUpvote = async () => {
        const form = { type: 'UPVOTE', postId: data.id }

        try {
            await PostService.postReaction(form);
        } catch (error) {
            console.log(error.response)
        }
      };
    
      const handleDownvote = async () => {
        const downvote = { type: 'DOWNVOTE', postId: data.id }

        try {
        await PostService.postReaction(downvote);
        } catch (error) {
            console.log(error.response)
        }
      };
    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="topLeft">
                    <img src="/assets/rebbitLogo.png" alt="" className="profilePic" />
                    <span className="userName">{data.title}</span>
                    <span className="postDate">21.september 2022.</span>
                </div>
            </div>
            <hr/>
            <div className="postMiddle">
                <span className="postText">{data.text}</span>
            </div>
        
            <div className="postOptions">
                <div className="bottomLeft">
                <ThumbUp className='upvote'  onClick={handleUpvote}/>
                <span className="karma">{data.karma}</span>
                <ThumbDown className='downvote' onClick={handleDownvote}/>
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
