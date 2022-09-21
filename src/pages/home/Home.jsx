import React from 'react'
import "./home.css"
import AppBar from '../../components/AppBar'
import SideBar from '../../components/sideNav/SideBar'
import Posts from '../../components/posts/Posts'
import RightBar from '../../components/rightBar/RightBar'

export default function Home() {
  return (
    <>
    <AppBar/>
    <div className="homeContainer">
    <SideBar/>
    <Posts/>
    <RightBar/>
    </div>
    
    </>
  )
}
