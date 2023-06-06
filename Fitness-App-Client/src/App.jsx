import './App.css';
import Register from "./components/Register";
import Login from './components/Login';
import Home from "./views/Home";
import AuthComponent from "./components/AuthComponent";
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
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<AuthComponent checkForLogin={checkForLogin}/>} path="/auth"/>
        </Route>
        <Route element={ <Login checkForLogin={checkForLogin}/>} path="/login" exact/>
        <Route element={ <Register checkForLogin={checkForLogin}/>} path="/sign-up"/>
        <Route element={<Home />} path="/"/>
      </Routes>
      </>
  );
}

export default App
