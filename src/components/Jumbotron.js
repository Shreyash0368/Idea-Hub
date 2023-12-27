import React from 'react'
import Container from 'react-bootstrap/Container';

export default function Jumbotron({ children, backgroundImage, fluid = true, className = '' }) {
  return (
    <Container fluid={fluid} className={`jumbotron ${className}`} style={{ backgroundImage }}>
      {children}
    </Container>
  )
}
