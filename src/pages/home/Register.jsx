import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import "./register.css"

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const registerForm = { username: username, email: email, displayName: displayName, password: password }
    try {
      const resp = await UserService.register(registerForm);
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!displayName.trim()) {
      errors.displayName = "Display name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="regPicLeft">
          <img src="/assets/register2.png" alt="" className="registerpic" />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}> 
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              className="logininput"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              name="uname"
            />
            {formErrors.username && <p className="error red-text">{formErrors.username}</p>}

            <label htmlFor="displayName">
              <b>Display name</b>
            </label>
            <input
              className="logininput"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter Display name"
              name="displayName"
            />
            {formErrors.displayName && <p className="error red-text">{formErrors.displayName}</p>}

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="logininput"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              name="email"
            />
            {formErrors.email && <p className="error red-text">{formErrors.email}</p>}

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              className="logininput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              name="psw"
            />
            {formErrors.password && <p className="error red-text">{formErrors.password}</p>}

            <button className="buttonRegister" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
