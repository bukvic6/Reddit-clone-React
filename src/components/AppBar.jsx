import React from 'react'
import "./appbar.css"
import { Link } from 'react-router-dom'

export default function AppBar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLogo">
        <img src="/assets/rebbitLogo.png" alt="" className="rebbitLogo" />
        <Link to="/" className="logo">Rebbit</Link>
      </div>
      

      <div className="topbarRight">
        <ul className="links">
          <CustomLink to= "/login">Login</CustomLink>
          <CustomLink to= "/register">Register</CustomLink>
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
