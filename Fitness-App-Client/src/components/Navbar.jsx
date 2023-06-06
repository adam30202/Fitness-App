import { Container, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useEffect, props } from 'react'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Navbar = ({ isLoggedIn }) => {

    return (
        <nav>
            <h1>GymPal</h1>     
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            { isLoggedIn ? (
            <ul>
                <li>
                    <Link to="/auth">Create Workout</Link>
                </li>
                <li>
                    <Link to="/auth">Calorie Counter</Link>
                </li>
            </ul> 
            ) : (
            <ul>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            )}
        </nav>
    )
}

export default Navbar;