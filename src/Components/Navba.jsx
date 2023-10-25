import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {LoginButton} from "../Components/UserManag/Login"
import { Cart } from './Offcanvas/OffCanvas';

export const TheNavbar = () => {
  return (
    <Navbar className='container ml-auto' bg="black" expand="lg">
      <Navbar.Brand className='col-2 text-white' href="#home">Comercio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container">
          <Nav.Link className='col-9 text-white' href="#productos">Productos</Nav.Link>
          <Cart/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


