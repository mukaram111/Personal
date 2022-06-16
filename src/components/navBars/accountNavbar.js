import * as React from "react";
import Avatar from "@mui/material/Avatar";
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
// import Avatar from "@mui/material/Avatar";
import {GiDividedSquare} from 'react-icons/gi'

import NavImage from "../../assets/images/download.svg";
import logoGame from "../../assets/images/logoGame.png";

import "./homeNavbar.css";
import "./docsNavbar.css";

const AccountNavbar = () => {
  return (
    <>
      <Navbar bg="" expand="lg">
        <Container>
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
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex ">
            <p className="pr-2"><span><GiDividedSquare style={{color:'red'}}/></span> 0 </p>
            <p className="pr"><span><GiDividedSquare/></span> 0</p>
            <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 25, height: 25,paddingRight:'5px '}}
                />
             
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default AccountNavbar;
