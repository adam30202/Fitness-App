import './App.css';
import Register from "./components/Register";
import Login from './components/Login';
import Home from "./views/Home";
import NewPost from "./views/NewPost";
import EditPost from './views/EditPost';
import MyPosts from './views/MyPosts';
import Navbar from './components/Navbar';
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {

useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://upload-widget.cloudinary.com/global/all.js");
    head.appendChild(script);

    // return () => {
    //   head.removeChild(script);
    // };
}, []);


  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<NewPost/>} path="/post-spotted"/>
          <Route element={<EditPost/>} path="/edit-spotted"/>
          <Route element={<MyPosts/>} path="/myposts"/>
        </Route>
        <Route element={<Login />} path="/login" exact/>
        <Route element={<Register />} path="/sign-up"/>
        <Route element={<Home />} path="/"/>
      </Routes>
      </>
  );
}

export default App
