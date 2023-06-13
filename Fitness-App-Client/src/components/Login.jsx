import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";

const Login = ({ setIsLoggedIn }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const navigate = useNavigate();

    const cookies = new Cookies();

    const _handleSubmit = (e) => {
        e.preventDefault();
    
        const configuration = {
            method: "post",
            url: "http://localhost:3000/login",
            data: {
              email,
              password,
            },
          };

        axios(configuration)
            .then((result) => {
                setLogin(true);
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
        <>
            <h2>Login</h2>
            <Form onSubmit={(e)=> _handleSubmit(e)}>
                {login ? (
                    <p className="text-success">You have logged in successfully</p>
                    ) : (
                    <p className="text-danger">Failed to log in</p>
                    )}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                <Button
                variant="primary"
                type="submit"
                onClick={(e) => _handleSubmit(e)}
                >
                Login
                </Button>
            </Form>
        </>
    )
}

export default Login;