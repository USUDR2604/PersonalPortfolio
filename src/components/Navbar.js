// src/components/Navbar.js
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HouseDoorFill, PersonLinesFill, EnvelopeFill, Gear, PersonCircle } from 'react-bootstrap-icons';

function PortfolioNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <PersonCircle className="me-2" />
          UltraUnityVerse Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/"><HouseDoorFill /> Home</Nav.Link>
            <Nav.Link as={Link} to="/about"><PersonLinesFill /> About Me</Nav.Link>
            <Nav.Link as={Link} to="/contact"><EnvelopeFill /> Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
