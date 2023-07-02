import React from 'react'
import { useState } from 'react';
import "./createCommunity.css"
import CommunityService from '../../services/CommunityService';




export default function CreateCommunity() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const[pdf, setSelectedFile] = useState(null);
  const[rules, setRules] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('pdf', pdf);
    // let community = {name:name, description:description,communityPDF:pdf}
    try{
      const resp = await CommunityService.createCommunity(formData);
      console.log(resp.data)
    } catch(error){
      console.log(error.response)
    }
  };
  return (
    <div className="createCommunity">
    
        <div className="containerLeft">
          <div className="formLeft">
          <form className='form' onSubmit={handleSubmit}>
          <h4>Create your community now!</h4>
              
          <input type="text" id="name" name="name" placeholder="Community name"
          value={name} onChange={(e) => setName(e.target.value)}/>

          <label htmlFor='subject'></label>
          <textarea id="subject" name="subject" placeholder="Description...." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

          <h4>Add rules to your community</h4>
          <textarea id="subject" name="subject" placeholder="Perfect place for rules :)" value={rules} onChange={(e) => setRules(e.target.value)}></textarea>


          <h4>Add pdf to your post</h4>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <input type="submit" value="Submit" />
          </form>

          </div>
        </div>
    </div>
  )
}
