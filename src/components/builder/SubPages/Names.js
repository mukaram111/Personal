import React from "react";
import { Link } from "react-router-dom";
import { HiUpload } from "react-icons/hi";

import BuilderSectionOne from "../BuilderSectionOne";
import BuilderSectionTwo from "../BuilderSectionTwo";
import HomeFooter from "../../../components/footers/homeFooter";
import BuilderNavbar from "../../../components/navBars/builderNavbar";

import "../BuilderStyle.css";
const Names = () => {
  return (
    <>
      <div className="BuilderMain">
        <div className="container">
          {" "}
          <BuilderNavbar />
          <BuilderSectionOne />
          {/* ------------------------------------------------------------ */}
          {/* <BuilderSectionTwo /> */}
          <div className="container pt-5 pb-5">
            <div className="col-sm-12">
              <div className="d-flex justify-content-between">
                <p className="bilderResult">0 Result</p>
                <p className="justify-content-between  d-flex">
                  {/* <span className="builderIconMain">
                    <Link className="uploadicon">
                      <HiUpload />
                    </Link>
                  </span> */}
                  <span className="builderIconMain">
                    <Link className="plusicon"> + </Link>
                  </span>
                </p>
              </div>

              <div className="builderContainer">
                <div className="text-center">
                  It looks like you don't have any Scenes
                </div>
                <div className="text-center">
                  <Link to="/NameDetail" className="NamesLink">
                    Click here
                  </Link>{" "}
                  to get started.
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------- */}
          <HomeFooter />
        </div>
      </div>
    </>
  );
};

export default Names;
