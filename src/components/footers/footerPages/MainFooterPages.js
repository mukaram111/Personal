import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const MainFooterPages = () => {
  return (
    <>
      <div className="col">
        <ul className="liststyle">
          <li>
            <Link className="footerPageText">Privacy Policy</Link>
          </li>
          <li>
            <Link className="footerPageText">Term Of Use</Link>
          </li>
          <li>
            <Link className="footerPageText">Content Policy</Link>
          </li>
          <li>
            <Link className="footerPageText">Code Of Ethics</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainFooterPages;
