import './App.css';
import Register from "./components/Register";
import Login from './components/Login';
import Home from "./views/Home";
import NewPost from "./views/NewPost";
import MyPosts from './views/MyPosts';
import Navbar from './components/Navbar';
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'

function App() {

  const [ isLoggedIn, setIsloggedIn ] = useState(false);

  const checkForLogin = (result) => {
    setIsloggedIn(result)
  }
  

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} checkForLogin={checkForLogin}/>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<NewPost/>} path="/post-spotted"/>
          <Route element={<MyPosts/>} path="/myposts"/>
        </Route>
        <Route element={ <Login checkForLogin={checkForLogin}/>} path="/login" exact/>
        <Route element={ <Register checkForLogin={checkForLogin}/>} path="/sign-up"/>
        <Route element={<Home />} path="/"/>
      </Routes>
      </>
  );
}

export default App
