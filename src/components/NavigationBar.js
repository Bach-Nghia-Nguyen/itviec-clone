import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/itviec-brand.png";

const NavigationBar = () => {
  return (
    <Navbar className="navigation" expand="lg">
      <Navbar.Brand className="mr-auto">
        <img src={logo} alt="IT Viec" width="80px" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <div>
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="link" to="/jobs">
            Jobs
          </Link>
        </div>
        <div>
          <Link className="link" to="/login">
            Log In
          </Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
