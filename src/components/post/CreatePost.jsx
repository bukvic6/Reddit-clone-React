import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommunityService from '../../services/CommunityService';
import "./CreatePost.css"


export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const[pdf, setSelectedFile] = useState(null);
    const { id } = useParams()


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
      };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(title);
      let community = {title:title, description:text, communityDTO:id}
      try{
        const resp = await CommunityService.createCommunity(community);
        console.log(resp.data)
      } catch(error){
        console.log(error.response)
      }
    };
    return (
      <div className="createPost">
      
          <div className="containerLeft">
            <div className="formLeft">
            <form className='form' onSubmit={handleSubmit}>
            <h4>Be creative!</h4>
                
            <input type="text" id="titile" name="title" placeholder="Post title"
            value={title} onChange={(e) => setTitle(e.target.value)}/>
  
            <label htmlFor='subject'></label>
            <textarea id="subject" name="subject" placeholder="Text...." value={text} onChange={(e) => setText(e.target.value)}></textarea>
  
            <h4>Add pdf to your post</h4>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <input type="submit" value="Submit" />
            </form>
  
            </div>
          </div>
      </div>
    )
  }