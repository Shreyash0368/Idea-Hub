import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {  
  NavLink,
  useNavigate,
} from "react-router-dom";
import AlertRenderer from "../context/AlertRenderer";
import { AlertsContext } from "../context/AlertsContext";

export default function NavbarComp() {
  const navigate = useNavigate();
  const { addAlert } = useContext(AlertsContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    addAlert("Logged Out", "info");
    navigate("/home");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Idea Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                About
              </Nav.Link>
              {localStorage.getItem("authToken") && (
                <Nav.Link as={NavLink} to="/mynotes" className="nav-link">
                  My Notes
                </Nav.Link>
              )}
            </Nav>
            {!localStorage.getItem("authToken") ? (
              <Nav className="justify-content-end ">
                <Nav.Link as={NavLink} to="/login" className="nav-link">
                  <Button>Login</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/signup" className="nav-link">
                  <Button>Signup</Button>
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="justify-content-end ">
                <Button onClick={handleLogout}>Logout</Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AlertRenderer />
    </>
  );
}
