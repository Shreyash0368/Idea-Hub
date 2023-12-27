import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "./Jumbotron";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import { CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <Container fluid className="about-page">
      <Jumbotron fluid className="about-header">
        <h1 className="display-4">Capture Your Thoughts, Anywhere, Anytime</h1>
        <p className="lead">
          Welcome to Idea Hub! We're here to help you organize your ideas,
          reminders, and to-dos with ease and security.
        </p>
      </Jumbotron>

      <Row className="my-4 mx-2 justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4 className="card-title">How Idea Hub Works</h4>
              <ul>
                <li>Jot down notes quickly using our easy-to-use form.</li>
                <li>Access your notes from any device with internet access.</li>
                <li>Edit or delete notes effortlessly with a simple click.</li>
                <li>Password-protected accounts for security and privacy.</li>
                <li>Additional 6-digit pin for password recovery.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4 className="card-title">Built with Expertise</h4>
              <ul>
                <li>MongoDB for efficient data storage and management.</li>
                <li>Express for a fast and scalable server-side foundation.</li>
                <li>React for dynamic and interactive user interfaces.</li>
                <li>
                  Bootstrap for responsive and visually appealing designs.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-3 mx-2 p-3 justify-content-center">
        <h2 className="mx-5">
        Web App Features: A Glimpse Inside
        </h2>
        <Col md={7}>
          <Card className="my-4" >
            <Card.Img variant="top" src="images/Example-page.png" style={{border: "1px solid", borderColor: "#0000002d"}} />
            <Card.Body>
              <Card.Text>
                <h5>Planning and organizing tasks for maximum efficiency.</h5> 
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="my-4">
            <Card.Img variant="top" src="images/Add-note.png" style={{border: "1px solid", borderColor: "#0000002d"}}/>
            <Card.Body>
              <Card.Text >
                <h5>Keeping the ideas flowing with ease and convenience.</h5>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="my-4">
            <Card.Img variant="top" src="images/Edit-note.png" style={{border: "1px solid", borderColor: "#0000002d"}}/>
            <Card.Body>
              <Card.Text>
                <h5>Second thought? No problem! The edit modal keeps your ideas
                flexible.</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
