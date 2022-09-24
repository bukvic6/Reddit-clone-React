import React from 'react'
import "./home.css"
import SideBar from '../../components/sideNav/SideBar'
import Posts from '../../components/posts/Posts'
import RightBar from '../../components/rightBar/RightBar'

export default function Home() {
  return (
    <>
    <div className="homeContainer">
    <SideBar/>
    <Posts/>
    <RightBar/>
    </div>
    
    </>
  )
}
