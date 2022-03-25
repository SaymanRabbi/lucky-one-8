import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home" className='text-white fs-bold fs-3'>BIKE <span className='brand-title'>DB</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className='text-white fs-5 me-3'>Home</Nav.Link>
        <Nav.Link href="#link"className='text-white fs-5 me-3'>Shop</Nav.Link>
        <Nav.Link href="#link" className='text-white fs-5 me-3'>Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </nav>
    );
};

export default Header;