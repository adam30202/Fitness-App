import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";




const Register = ({ checkForLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const navigate = useNavigate();

    const cookies = new Cookies();

    const _handleSubmit = (e) => {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "http://localhost:3000/register", //change once deployed
            data: {
                email,
                password,
            }
        }

        axios(configuration)
            .then((result) => {
                setRegister(true);
                checkForLogin(true); // passed login status back to app
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                })
                navigate("/auth");


              })
              .catch((error) => {
                error = new Error();
              });
    }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e)=> _handleSubmit(e)}>
                {register ? (
                    <p className="text-success">You have signed up successfully</p>
                    ) : (
                    <p className="text-danger">Please sign up</p>
                    )}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={ email }
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>

                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={ password }
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e)=> _handleSubmit(e)}
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Register;