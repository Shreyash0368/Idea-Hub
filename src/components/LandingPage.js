import React from "react";
import Jumbotron from "./Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import { NavLink } from "react-router-dom"; // Import NavLink

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <Container fluid className="landing-page">
        <Jumbotron fluid className="hero-section">
          <h1 className="hero-title">Idea Hub: Capture Your Thoughts Securely</h1>
          <p className="hero-subtitle">
            Organize your ideas, reminders, and to-dos with ease. Keep your
            notes private and protected.
          </p>
        </Jumbotron>
        <Container className="my-4">
          <Row>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Write Short Notes</Card.Title>
                  <Card.Text>
                    Quickly jot down your thoughts with titles, tags, and
                    descriptions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Password Protected</Card.Title>
                  <Card.Text>
                    Rest assured knowing your personal information and notes are
                    protected.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Easy Access</Card.Title>
                  <Card.Text>
                    Keep your notes organized and accessible from anywhere.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* ...Add more feature cards here... */}
          </Row>
          <Row className="benefits-section">
            <Col md={6}>
              <h3>Never forget an important thought again.</h3>
            </Col>
            <Col md={6}>
              <h3>Keep your notes organized and accessible.</h3>
            </Col>
          </Row>
          {!localStorage.getItem('authToken') && <Row className="call-to-action justify-content-center">
            <Col>
              <NavLink to="/signup" className="btn btn-primary btn-lg">
                Sign Up for Free
              </NavLink>
            </Col>
          </Row>}
        </Container>
        <Footer />
      </Container>
    </>
  );
}
