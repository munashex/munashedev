import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbars.css';
import{Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import { BsMedium } from "react-icons/bs";

function Navbars() {

    
    return (
        <div>
            <Navbar style={{backgroundColor: "aqua"}} expand="lg" className='navabr'>
  <Container>
    <Navbar.Brand>
    <BsMedium size='40' className="media"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="links">
        <Nav.Link as={NavLink} to="/" className="navlinks">ABOUT</Nav.Link>
        <Nav.Link as={NavLink} to="/contact" className="navlinks">CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbars
