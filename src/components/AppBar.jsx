import React from 'react'
import {Search} from "@mui/icons-material"
import "./appbar.css"

export default function AppBar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLogo">
        <img src="/assets/rebbitLogo.png" alt="" className="rebbitLogo" />
        <span className="logo">Rebbit</span>
      </div>
      <div className="topbarSearch">
        <div className="searchBar">
          <Search className='searchIcon'/>
          <input type="text" placeholder='Search' className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="links">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Login</span>
          <span className="topbarLink">Register</span>

        </div>
      </div>
    </div>
  )
}
