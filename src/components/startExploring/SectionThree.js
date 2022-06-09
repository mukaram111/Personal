import React from "react";

import { FaDiscord } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

import "./startExploringStyle.css";

const SectionThree = () => {
  return (
    <div className="SEsectionThreeMain">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {" "}
            <button className="SEsectionThreebtn" type="">
              <span>
                <FaDiscord style={{ fontSize: "30px" }} />
              </span>
              <span>&nbsp; JOIN DISCORD</span>
            </button>
          </div>
          <div className="col-md-6 sectionThreeMainIcons">
            <a className="sectionThreeIcons">
              {" "}
              <FaDiscord style={{ fontSize: "30px" }} />
            </a>
            <a className="sectionThreeIcons">
              <FiGithub style={{ fontSize: "30px" }} />
            </a>
            <a className="sectionThreeIcons">
              <FaTwitter style={{ fontSize: "30px" }} />
            </a>
          </div>
        </div>
        <div className="row">
          <p className="SEsectionThreeText pt-5">© 2022 Game</p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
