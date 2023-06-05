import React from "react";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const AuthComponent = () => {

    const navigate = useNavigate();
    // logout
    const logout = () => {
    // destroys the cookie
        cookies.remove("TOKEN", { path: "/" });

        navigate("/")
    }

  return (
    <div>
      <h1>Auth Component</h1>
        <Button type="submit" variant="danger" onClick={() => logout()}>
            Logout
        </Button>
    </div>
  );
}

export default AuthComponent;