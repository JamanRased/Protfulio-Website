import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" text="dark" expand="lg" >
            <Container fluid>
                <a className='navbar-brand' href="#">
                    <img src="https://i.ibb.co/2ZZTnjz/27639690-designstyle-boogie-m.png" width="180" height="auto" class="d-inline-block align-top" alt=""/>
                </a>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Nav className="d-flex p-1">
                    <Nav.Link href="home" className='border m-2'>HOME</Nav.Link>
                    <Nav.Link href="#services" className='border m-2'>SERVICES</Nav.Link>
                    <Nav.Link href="#works" className='border m-2'>WORKS</Nav.Link>
                    <Nav.Link href="blog" className='border m-2'>BLOG</Nav.Link>
                    <Nav.Link href="#contact" className='border m-2'>CONTACT</Nav.Link>
                    <Nav.Link href="about" className='border m-2'>ABOUT ME</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;