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
import { useEffect, useContext, createContext, useState } from 'react';
import Cookies from "universal-cookie";

export const UserContext = createContext();

function App() {

  const [ user, setUser ] = useState('')

  const cookies = new Cookies();
  

  useEffect(() => {
    // const head = document.querySelector("head");
    // const script = document.createElement("script");
    // script.setAttribute("src", "https://upload-widget.cloudinary.com/global/all.js");
    // head.appendChild(script);

    const token = cookies.get("TOKEN")
    if (token) {
      const payloadBase64Url = token.split('.')[1];
      const decodedPayload = JSON.parse(window.atob(payloadBase64Url));
      const userId = decodedPayload.userId;
      setUser(userId)
      console.log(token)
      console.log(cookies)
    }
    console.log('outside condtion', user)

  }, [cookies.token]);


  return (
    <>
      <Navbar/>
      <UserContext.Provider value={user}>
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
      </UserContext.Provider>
      </>
  );
}

export default App
