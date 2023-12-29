import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    if (username === "sha" && password === "123") {
      // Redirect to the home page or handle authentication success
      alert("Logged in successfully. Redirecting to home page...");
      window.location.href = "/";
    } else {
      // Handle incorrect credentials (show an error message, etc.)
      alert("Invalid username or password");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <section className="section login-page flex-grow-1 d-flex align-items-center justify-content-center py-4">
        <Container>
          <Row className="justify-content-center">
            <Col
              lg={4}
              md={6}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <Card className="mb-3 login-area">
                <Card.Body>
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Login to GMM Hospital Admin
                    </h5>
                    <p className="text-center small">
                      Enter your username & password to login
                    </p>
                  </div>
                  <Form onSubmit={loginUser}>
                    <Form.Group controlId="yourUsername">
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          className="username-password-field"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="yourPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        className="username-password-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your password!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 mt-4 image-select-delete-btn"
                    >
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;
