import React from "react";
import HomeFooter from "../footers/homeFooter";
import DaoNavbar from "../navBars/daoNavbar";
import DAOSectionFive from "./DAOSectionFive";
import DAOSectionFour from "./DAOSectionFour";
import DAOSectionOne from "./DAOSectionOne";
import DAOSectionSix from "./DAOSectionSix";
import DAOSectionThree from "./DAOSectionThree";
import DAOSectionTwo from "./DAOSectionTwo";

const DAOMain = () => {
  return (
    <>
      <DaoNavbar />
      <DAOSectionOne />
      <DAOSectionTwo />
      <DAOSectionThree />
      <DAOSectionFour />
      <DAOSectionFive />
      <DAOSectionSix />
      {/* <HomeFooter /> */}
    </>
  );
};

export default DAOMain;
