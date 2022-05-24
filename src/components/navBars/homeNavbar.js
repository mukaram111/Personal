import React, { useState } from "react";
import { Nav, Form, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";

import NavImage from "../../assets/images/download.svg";

import "./homeNavbar.css";

const HomeNavbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 2) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const bgColor = () => {
    // document.getElementById("foo").setAttribute("className", "navBgColor");
  };

  return (
    <>
      <Navbar
        className={colorChange ? "navMain colorChange" : "navMain"}
        bg=""
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img className="navImg" src={NavImage} alt="NavBar Imag" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            id="colorChange"
            onClick={bgColor}
            aria-controls="navbarScroll"
            className="toggleBtn p-0"
          >
            {" "}
            <RiArrowDropDownLine
              className={
                colorChange ? "dropdownIcon colorChange" : "dropdownIcon"
              }
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <Nav.Link className="nav-item">
                {" "}
                <Link
                  // style={{ color: "white" }}
                  className={
                    colorChange
                      ? "navItems itemColorChange"
                      : " nav-link active navItems"
                  }
                  aria-current="page"
                  to="/MarketPlaceMain"
                >
                  Marketplace
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link
                  className={
                    colorChange
                      ? "navItems itemColorChange"
                      : " nav-link active navItems"
                  }
                  to="/BuilderMain"
                >
                  Builder
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link
                  className={
                    colorChange
                      ? "navItems itemColorChange"
                      : " nav-link active navItems"
                  }
                  to="/DOCS"
                >
                  Docs
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link
                  className={
                    colorChange
                      ? "navItems itemColorChange"
                      : " nav-link active navItems"
                  }
                  to="/EventMain"
                >
                  Events
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <Link
                  className={
                    colorChange
                      ? "navItems itemColorChange"
                      : " nav-link active navItems"
                  }
                  to="/DAOMain"
                >
                  DAO
                </Link>
              </Nav.Link>
              <Nav.Link to="" className="nav-item">
                <Link
                  className={
                    colorChange
                      ? "navItems itemColorChange"
                      : " nav-link active navItems"
                  }
                  to="/BlogMain"
                >
                  {" "}
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex responsive">
              <span className="nav-item ">
                <Link
                  className={
                    colorChange
                      ? "navItems itemColorChange spacing "
                      : " nav-link active navItems"
                  }
                  to=""
                >
                  {" "}
                  Join Our Discord
                </Link>
              </span>
              <Link to="/startExploring">
                <button
                  className={colorChange ? "navbtn navbtnChange" : "navbtn"}
                  type=""
                >
                  START EXPLORING
                </button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* -------------------------------------------------- */}
      {/* <div className="container-fluid">
        <div className="row">
          <div className={colorChange ? "navMain colorChange" : "navMain"}>
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img className="navImg" src={NavImage} alt="NavBar Imag" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="">
                    <RiArrowDropDownLine
                      className={
                        colorChange
                          ? "dropdownIcon colorChange"
                          : "dropdownIcon"
                      }
                    />
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className={
                          colorChange
                            ? "navItems itemColorChange"
                            : " nav-link active navItems"
                        }
                        aria-current="page"
                        to="/MarketPlaceMain"
                      >
                        Marketplace
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          colorChange
                            ? "navItems itemColorChange"
                            : " nav-link active navItems"
                        }
                        to="/BuilderMain"
                      >
                        Builder
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link
                        className={
                          colorChange
                            ? "navItems itemColorChange"
                            : " nav-link active navItems"
                        }
                        to="/DOCS"
                      >
                        Docs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          colorChange
                            ? "navItems itemColorChange"
                            : " nav-link active navItems"
                        }
                        to="/EventMain"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          colorChange
                            ? "navItems itemColorChange"
                            : " nav-link active navItems"
                        }
                        to="/DAOMain"
                      >
                        DAO
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          colorChange
                            ? "navItems itemColorChange"
                            : " nav-link active navItems"
                        }
                        to="/BlogMain"
                      >
                        {" "}
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex responsive">
                    <span className="nav-item ">
                      <Link
                        className={
                          colorChange
                            ? "navItems itemColorChange spacing "
                            : " nav-link active navItems"
                        }
                        to="/s"
                      >
                        {" "}
                        Join Our Discord
                      </Link>
                    </span>
                    <Link to="/startExploring">
                      <button
                        className={
                          colorChange ? "navbtn navbtnChange" : "navbtn"
                        }
                        type=""
                      >
                        START EXPLORING
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomeNavbar;
