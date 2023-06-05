import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function ProtectedRoutes() {

    // gets cookie from browser if logged in
    const token = cookies.get("TOKEN");
    console.log(token)

  return (
    token ? <Outlet /> :  <Navigate to="/" />
  );
}