import { Container, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useEffect, props } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Navbar = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const token = cookies.get("TOKEN");
    // logout
    const logout = () => {
    // destroys the cookie
        cookies.remove("TOKEN", { path: "/" });

        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <nav>
            <h1>Spotted</h1>     
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
            { token ? (
            <>
                <li>
                    <Link to="/allposts">All Posts</Link>
                </li>
                <li>
                    <Link to="/spotted-near-you">Spotted Near You</Link>
                </li>
                <li>
                    <Link to="/myposts">My Posts</Link>
                </li>
                <li>
                    <Link to="/post-spotted">Post Spotted</Link>
                </li>
                <li>
                    <a href="" onClick={() => logout()}>Sign Out</a>
                </li>
            </>
            ) : (
            <>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </>
            )}
            </ul>
        </nav>
    )
}

export default Navbar;