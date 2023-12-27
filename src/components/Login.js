import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { AlertsContext } from "../context/AlertsContext";

export default function Login() {  
  const navigate = useNavigate();
  const {addAlert} = useContext(AlertsContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_PATH}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailID: email,
          password: password,
        })
      });
           
      const json = await response.json();
      if (json.success) {       
        localStorage.setItem('authToken', json.authtoken);
        addAlert('Logged In Successfully!!', 'success');
        navigate('/mynotes');
      }
      else {
        addAlert('Invalid Credentials!!', 'danger');
      }

    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <Container className="my-3">
        <Form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={onEmailChange}
              required
              minLength={5}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
              required
              minLength={5}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}
