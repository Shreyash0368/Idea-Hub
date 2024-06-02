import React, {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { AlertsContext } from "../context/AlertsContext";

export default function Signup() {
  const navigate = useNavigate();
  const {addAlert} = useContext(AlertsContext);

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      addAlert('Passwords Do Not Match!!', 'warning');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_PATH}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          emailID: email,
          password: password,
        })
      });
      
      const json = await response.json();
      if (json.success) {
        localStorage.setItem('authToken', json.authtoken);
        addAlert('SignedUp Successfully!!', 'success');
        navigate('/mynotes');
      }
      else {
        alert('invalid credential');
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
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              value={userName}
              onChange={onNameChange}
              required
              minLength={5}
            />
          </Form.Group>

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
              minLength={8}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              required
              minLength={8}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </Container>
    </>
  );
}
