import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import "./login.css"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = {username: username, password: password}
    try{
      const resp = await UserService.login(login);
      navigate("/");
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div className="login">
        <div clasregisterDatasName="loginWrapper">
            <div className="pictureLeft">
            <img src="/assets/login2.jpg" alt="" className="loginpic" />
            </div>
            <div className="form">
            <label for="uname"><b>Username</b></label>
            <input className="logininput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" name="uname"/>

            <label for="psw"><b>Password</b></label>
            <input className="logininput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Enter Password" name="psw" />

            <button className='buttonLogin' type="submit">Login</button>
            <label>
            </label>
            </div>
        </div>
    </div>
  )
}
