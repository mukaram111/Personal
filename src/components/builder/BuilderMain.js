import React from "react";

import BuilderSectionOne from "./BuilderSectionOne";
import BuilderSectionTwo from "./BuilderSectionTwo";
import HomeFooter from "../../components/footers/homeFooter";
import BuilderNavbar from "../../components/navBars/builderNavbar";

import "./builder.css";

const BuilderMain = () => {
  return (
    <div className="BuilderMain">
      <div className="container">
        {" "}
        <BuilderNavbar />
        <BuilderSectionOne />
        <BuilderSectionTwo />
        <HomeFooter />
      </div>
    </div>
  );
};

export default BuilderMain;
