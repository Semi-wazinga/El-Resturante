import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className='navBar text-white mb-5 fixed-top'
        >
          <Container fluid>
            <Navbar.Brand href='#' className='brand'>
              El Resturante
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='start'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className='text-dark'
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-center text-white flex-grow-1 pe-3'>
                  <Nav.Link href='/' className='nav-text'>
                    Home
                  </Nav.Link>
                  <Nav.Link href='/menu' className='nav-text'>
                    Menu
                  </Nav.Link>
                  <Nav.Link href='/about' className='nav-text'>
                    About
                  </Nav.Link>
                  <Nav.Link href='/reservation' className='nav-text'>
                    Reservation
                  </Nav.Link>
                </Nav>
                <Form className='d-flex'>
                  <Form.Control
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                  />
                  <Button variant='outline-light'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
