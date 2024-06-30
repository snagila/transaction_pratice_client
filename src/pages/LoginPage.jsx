import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center justiy-content-center vh-100">
        <Col>
          <Stack className="shadow-lg border rounded p-4 d-flex align-items-center">
            <h1>Welcome Back!!</h1>
            <p>Manage your income and expenses</p>
            <p>Track Your Finance</p>
          </Stack>
        </Col>

        {/* SignUp Form */}
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Login</h1>
            {/* login Form */}
            <LoginForm />

            <p>Don't have account?</p>
            <Link to="/signup">Sign Up</Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
