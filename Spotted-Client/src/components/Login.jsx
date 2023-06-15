import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";

const Login = ({ setIsLoggedIn }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

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
                setLogin(false);
                console.error(`An error occured: ${error}`);
            });
      }


    return (
        <div className="flex justify-center h-screen">
            
            <Form onSubmit={(e)=> _handleSubmit(e)} className="w-96">
                <h2 className="text-4xl font-bold justify-center flex dark:text-white">Login</h2>
                {login === false && (
                    <p className="text-danger justify-center flex">Incorrect password or email</p>
                    )}
                <Form.Group controlId="formBasicEmail" className="mb-2 dark:text-white">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3 dark:text-white">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                <Button className="flex justify-center"
                variant="primary"
                type="submit"
                onClick={(e) => _handleSubmit(e)}
                >
                Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;