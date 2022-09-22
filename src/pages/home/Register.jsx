import React from 'react'
import "./register.css"

export default function Register() {
  return (
        <div className="register">
        <div className="registerWrapper">
            <div className="regPicLeft">
            <img src="/assets/register2.png" alt="" className="registerpic" />
            </div>
            <div className="form">
            <label for="uname"><b>Username</b></label>
            <input className="logininput" type="text" placeholder="Enter Username" name="uname"/>

            <label for="email"><b>Email</b></label>
            <input className="logininput" type="password" placeholder="Enter Email" name="email" />

            <label for="psw"><b>Password</b></label>
            <input className="logininput" type="password" placeholder="Enter Password" name="psw" />

            <button className="buttonRegister" type="submit">Register</button>
            <label>
            </label>
            </div>
        </div>
    </div>
  )
}
