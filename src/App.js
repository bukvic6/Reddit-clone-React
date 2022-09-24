import Home from "./pages/home/Home";
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Register from "./pages/home/Register";
import Login from "./pages/home/Login";
import AppBar from "./components/AppBar";
import CreateCommunity from "./pages/home/CreateCommunity";

function App() {

  return (
    <>

      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/createComm" element={<CreateCommunity/>} />
      </Routes>


    </>

  ) 
}

export default App;
