import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <div>
 <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Checkpt HOOKS</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <span style={{color:"white",marginRight:"10px"}}>Search</span>
    <input type="text"/>
    </Container>
  </Navbar>

    </div>
  )
}

export default Navigation