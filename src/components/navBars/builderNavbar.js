import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import logoGame from '../../assets/images/logoGame.png'
import NavImage from "../../assets/images/download.svg";

import "./homeNavbar.css";

const BuilderNavbar = () => {
  return (
    <>
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img className="navImg" src={logoGame} alt="NavBar Imag" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <Nav.Link className="navItems">
                {" "}
                <Link to="/MarketPlaceMain" className="navItemstyle" style={{color:'#fff'}}>
                  Marketplace
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                <Link to="/BuilderMain" className="navItemstyle" style={{color:'#fff'}}>
                  {" "}
                  Builder
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                <Link to="/DOCS" className="navItemstyle" style={{color:'#fff'}}>
                  {" "}
                  Docs
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                <Link to="/EventMain" className="navItemstyle" style={{color:'#fff'}}>
                  {" "}
                  Events
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                {" "}
                <Link to="/DAOMain" className="navItemstyle" style={{color:'#fff'}}>
                  {" "}
                  DAO
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                <Link to="/BlogMain" className="navItemstyle" style={{color:'#fff'}}>
                  {" "}
                  Blog
                </Link>
              </Nav.Link>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
              <Button className="eventNavSignInbtn">SIGN IN</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default BuilderNavbar;
