import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="pictureLeft">
            <img src="/assets/login2.jpg" alt="" className="loginpic" />
            </div>
            <div className="form">
            <label for="uname"><b>Username</b></label>
            <input className="logininput" type="text" placeholder="Enter Username" name="uname"/>

            <label for="psw"><b>Password</b></label>
            <input className="logininput" type="password" placeholder="Enter Password" name="psw" />

            <button className='buttonLogin' type="submit">Login</button>
            <label>
            </label>
            </div>
        </div>
    </div>
  )
}
