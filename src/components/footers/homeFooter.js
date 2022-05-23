import React from "react";

// import { Dropdown } from "react-bootstrap";
import { FaDiscord, FaRedditAlien, FaTwitter } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import FooterListIcon from "../../assets/images/FooterListIcon.png";
import GitIcon from "../../assets/images/githubicon.svg";

import "./homeFooter.css";

const HomeFooter = () => {
  return (
    <>
      <div className="Home_Footer_Main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8">
              <div>
                <div></div>
                <div className="Footerlinks">
                  <div>
                    <label>
                      {" "}
                      <img
                        src={FooterListIcon}
                        className="selectImg "
                        alt="..."
                      />
                    </label>
                    <select className=" footerSelect">
                      <option value="English">English </option>

                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>

                  <Link to="/" className="">
                    Home
                  </Link>
                  <Link to="/PrivacyPolicy" className="">
                    Privacy Policy
                  </Link>
                  <Link to="/TermOfUse" className="">
                    Terms of Use
                  </Link>
                  <Link to="/ContentPolicy" className="">
                    Content Policy
                  </Link>
                  <Link to="/CodeOfEthics" className="">
                    Code of Ethics
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex  footerIconSet">
              <div className="FooterIcons  s">
                <Link className="spacingIcons">
                  <FaDiscord className="" />
                </Link>
                <Link className="spacingIcons">
                  <FaRedditAlien className="" />
                </Link>
                <Link className="spacingIcons">
                  <img src={GitIcon} alt="..." style={{}} />
                </Link>
                <Link className="spacingIcons">
                  <FaTwitter />
                </Link>
              </div>
              <div>
                <p className="spacingIcons">© 2022 Decentraland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
