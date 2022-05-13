import React, { useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavImage from "../../assets/images/download.svg";

import "./homeNavbar.css";

const HomeNavbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 300) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div className="container-fluid">
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
                      style={{ fontSize: "55px", color: "white" }}
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
                  <form className="d-flex">
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
      </div>
    </>
  );
};

export default HomeNavbar;
