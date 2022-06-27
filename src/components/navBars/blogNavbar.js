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

const BlogNavbar = () => {
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
                  Docs
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
                  <strong> Blog</strong>
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

      {/* --------------------------------------------------------- */}
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="" className="navBrand ml-0">
              <strong> All Articles</strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <Nav.Link to="" className=" navtext">
                {" "}
                Annoucements
              </Nav.Link>
              <Nav.Link to="" className=" navtext">
                Project Updates
              </Nav.Link>
              <Nav.Link to="/DOCS" className=" navtext">
                Platforms
              </Nav.Link>
              <Nav.Link to="" className=" navtext">
                Technology
              </Nav.Link>
              <Nav.Link to="" className=" navtext">
                {" "}
                Tutorials
              </Nav.Link>
            </Nav>

            <NavDropdown
              title="Authors"
              // id="basic-nav-dropdown"
              className="navtext"
            >
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {" "}
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BlogNavbar;
