import PostService from "../../services/PostService";
import { useState } from 'react';

export default function CreatePost(){
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let post = {title:title, text:text}
        try{
            const resp = await PostService.createPost(post);

        } catch(error){
            console.log(error.response)

        }
    }
    return (
        <div className="createCommunity">
        
            <div className="containerLeft">
              <div className="formLeft">
              <form className='form' onSubmit={handleSubmit}>
              <h4>Create your community now!</h4>
                  
              <input type="text" id="title" name="title" placeholder="Post title"
              value={title} onChange={(e) => setTitle(e.target.value)}/>
    
              <label htmlFor='subject'></label>
              <textarea id="subject" name="subject" placeholder="Text...." value={text} onChange={(e) => setText(e.target.value)}></textarea>
              <input type="submit" value="Submit">
              </input>
              </form>
    
              </div>
            </div>
        </div>
      )


}