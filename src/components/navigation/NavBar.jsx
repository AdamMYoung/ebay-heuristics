import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>Ebay Heuristics</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Map</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => alert("Beep Boop I can't sign in yet")}>Sign-in</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
