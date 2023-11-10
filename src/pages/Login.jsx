import React, { useContext, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

const LoginPage = () => {
  const emailInuptRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enterEmail = emailInuptRef.current.value;
    const enterPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1e5jiR-NO0ynVLFAcoLysBYtJztHPwss",
      {
        method: "POST",
        body: JSON.stringify({
          email: enterEmail,
          password: enterPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      // .then((res) => {
      //   if (res.ok) {
      //     return res.json();
      //   } else {
      //     return res.json().then((data) => {
      //       let errorMessage = "Authentication Failed!..";
      //       if (data && data.error && data.error.message) {
      //         errorMessage = data.error.message;
      //       }
      //       throw new Error(errorMessage);
      //     });
      //   }
      // })

      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                ref={emailInuptRef}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                ref={passwordInputRef}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
