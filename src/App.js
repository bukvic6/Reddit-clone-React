import Home from "./pages/home/Home";
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Register from "./pages/home/Register";
import Community from "./pages/community/Community";

import Login from "./pages/home/Login";
import AppBar from "./components/AppBar";
import CreateCommunity from "./pages/community/CreateCommunity";
import CreatePost from "./pages/post/CreatePost";


function App() {

  return (
    <>

      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/createComm" element={<CreateCommunity/>} />
        <Route path="/community/:id" element={<Community/>} />
        <Route path="/createPost" element={<CreatePost/>}/>
      </Routes>


    </>

  ) 
}

export default App;
