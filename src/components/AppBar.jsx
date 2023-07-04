import React from 'react'
import "./appbar.css"
import { Link, useNavigate } from 'react-router-dom'

export default function AppBar() {
  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token;
};

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/")
  };
  return (
    <div className='topbarContainer'>
      <div className="topbarLogo">
        <img src="/assets/rebbitLogo.png" alt="" className="rebbitLogo" />
        <Link to="/" className="logo">Rebbit</Link>
      </div>
      

      <div className="topbarRight">
        <ul className="links">
        {!isLoggedIn() && <CustomLink to="/login">Login</CustomLink>}
          {!isLoggedIn() && <CustomLink to="/register">Register</CustomLink>}
          {isLoggedIn() && (
            <li>
              <Link to="#" className="logoutLink" onClick={handleLogout}>Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
  function CustomLink({to,children, ...props}){
    const path = window.location.pathname

    return(
      <li>
        <Link to = {to} {...props}>{children}</Link>
      </li>

    )
  }
