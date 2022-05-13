import React from "react";
import NavImage from "../../assets/images/download.svg";
import "./homeNavbar.css";
import "./docsNavbar.css";
import {
  Nav,
  Form,
  Navbar,
  Container,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const DocsNavbar = () => {
  return (
    <>
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img className="navImg" src={NavImage} alt="NavBar Imag" />
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
                <Link to="/MarketPlaceMain" className="navItemstyle">
                  {" "}
                  Marketplace
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                <Link to="/BuilderMain" className="navItemstyle">
                  {" "}
                  Builder
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                <Link to="/DOCS" className="navItemstyle">
                  {" "}
                  <strong> Docs</strong>
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                <Link to="/EventMain" className="navItemstyle">
                  {" "}
                  Events
                </Link>
              </Nav.Link>
              <Nav.Link className="navItems">
                {" "}
                <Link to="/DAOMain" className="navItemstyle">
                  {" "}
                  DAO
                </Link>
              </Nav.Link>
              <Nav.Link to="" className="navItems">
                <Link to="/BlogMain" className="navItemstyle">
                  {" "}
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                style={{ backgroundColor: " #f2f3f5", width: "300px" }}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button className="eventNavSignInbtn">SIGN IN</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
<hr/>
      {/* --------------------------- */}

      {/* -------------------------------- */}
    </>
  );
};

export default DocsNavbar;
