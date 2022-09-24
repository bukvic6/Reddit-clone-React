import React from 'react'
import "./createCommunity.css"



export default function CreateCommunity() {
  return (
    <div className="createCommunity">
    
        <div class="containerLeft">
          <div className="formLeft">
              
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit">
          </input>

          </div>
        </div>
        <div className="containerRight">
          <div className="formRight">
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          </div>
        </div>
   
    </div>
  )
}
