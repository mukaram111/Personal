import React from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import NavImage from "../../assets/images/download.svg";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const StartExploringNavbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="navMain"
            style={{ position: "absolute", background: "transparent" }}
          >
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
                      {/* <Link to="/">Home</Link> */}
                      <Link
                        className="navItems nav-link active"
                        aria-current="page"
                        to="/startExploring"
                      >
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="navItems nav-link active"
                        style={{ fontWeight: "600", fontSize: "14px" }}
                        aria-current="page"
                        href=""
                      >
                        PLAY
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/MarketPlaceMain"
                        className="navItems nav-link active"
                        aria-current="page"
                        href=""
                      >
                        Marketplace
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/BuilderMain"
                        className="navItems nav-link active"
                        href="#"
                      >
                        Builder
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link
                        to="/DOCS"
                        className="navItems nav-link active"
                        href="#"
                      >
                        Docs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="navItems nav-link active"
                        to="/EventMain"
                      >
                        Events
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/DAOMain" className="navItems nav-link active">
                        DAO
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/BlogMain" className="navItems nav-link active">
                        {" "}
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    {/* <span className="nav-item ">
                      <a
                       className='navItems nav-link active'
                      >
                        {" "}
                        Join Our Discord
                      </a>
                    </span> */}

                    <button className="SEnavbtn" type="">
                      <span>
                        <FaDiscord style={{ fontSize: "20px" }} />
                      </span>
                      <span>&nbsp; JOIN DISCORD</span>
                    </button>
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

export default StartExploringNavbar;
