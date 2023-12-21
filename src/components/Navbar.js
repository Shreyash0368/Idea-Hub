import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {
    BrowserRouter as Router,    
    NavLink
  } from "react-router-dom";

export default function NavbarComp() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">I-Note</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" className='nav-link'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='nav-link'>About</Nav.Link>                                                      
                        </Nav>
                        <Nav className='justify-content-end '>   
                            <Nav.Link as={NavLink} to="/login" className='nav-link'>
                                <Button>Login</Button>
                            </Nav.Link>                         
                            <Nav.Link as={NavLink} to="/signup" className='nav-link'>
                                <Button>Signup</Button>
                            </Nav.Link>                                                  
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

