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
    const login = { username: username, password: password };
    try {
      const resp = await UserService.login(login);
      const token = resp.data;
      localStorage.setItem('token', token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="pictureLeft">
          <img src="/assets/login2.jpg" alt="" className="loginpic" />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}> 
            <label htmlFor="uname"><b>Username</b></label>
            <input className="logininput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" name="uname" />

            <label htmlFor="psw"><b>Password</b></label>
            <input className="logininput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="psw" />

            <button className='buttonLogin' type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}