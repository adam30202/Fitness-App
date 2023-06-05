import { Container, Col, Row } from "react-bootstrap";
import './App.css'
import Register from "./components/Register";
import Login from './components/Login';
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<AuthComponent />} path="/auth"/>
        </Route>
        <Route element={ <Login />} path="/"/>
        <Route element={<FreeComponent />} path="/free"/>
      </Routes>
      </>
  );
}

export default App
