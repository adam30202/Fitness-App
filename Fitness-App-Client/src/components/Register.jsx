import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import GeoLocation from './GeoLocation';
import axios from "axios";
import Cookies from "universal-cookie";

const Register = ({ setIsLoggedIn }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [register, setRegister] = useState(false);

    const navigate = useNavigate();

    const cookies = new Cookies();
    
    const _handleSubmit = (e) => {
        console.log(location)
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "http://localhost:3000/register", //change once deployed
            data: {
                email,
                password,
                location,
                username
            }
        }

        axios(configuration)
            .then((result) => {
                setRegister(true);
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                setIsLoggedIn(true);
                navigate("/myposts");
              })
              .catch((error) => {
                console.error(`An error occured: ${error}`)
              });
    }

    return (
        <div className="flex justify-center h-screen">
            <GeoLocation setLocation={ setLocation }/>

            <Form onSubmit={(e)=> _handleSubmit(e)} className="w-96">
                <h2 className="text-4xl font-bold justify-center flex">Register</h2>
                {register ? (
                    <p className="text-success">You have signed up successfully</p>
                    ) : (
                    <p className="text-danger">Please sign up</p>
                    )}
                    

                <Form.Group className="mb-2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={ username }
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={ email }
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>

                
                <Form.Group className="mb-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={ password }
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        value={ location }
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Your city"
                    />
                </Form.Group> */}

                
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e)=> _handleSubmit(e)}
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register;