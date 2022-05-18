import React from "react";
import { Link } from "react-router-dom";

import { FaListUl } from "react-icons/fa";

import "./style.css";

const MainFooterPages = () => {
  return (
    <>
      <div className="col">
        <ul className="liststyle">
          <li>
            <Link to="/PrivacyPolicy" className="footerPageText">
              <FaListUl />
              &nbsp; Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/TermOfUse" className="footerPageText">
              <FaListUl />
              &nbsp; Term Of Use
            </Link>
          </li>
          <li>
            <Link to="/ContentPolicy" className="footerPageText">
              <FaListUl />
              &nbsp; Content Policy
            </Link>
          </li>
          <li>
            <Link to="/CodeOfEthics" className="footerPageText">
              <FaListUl />
              &nbsp; Code Of Ethics
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainFooterPages;
