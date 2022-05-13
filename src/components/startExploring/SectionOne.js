import React from "react";

import ESsectionOneHeading from "../../assets/images/ESsectionOnepic.png";
import SectionOneCard from "./SectionOneCard";
// import SEcardpic1 from "../../assets/images/wallet.jpg"
import "./startExploringStyle.css";

const SectionOne = () => {
  return (
    <>
      <div className="SEsectionOneMain">
        <div className="container">
          <div className="row">
            <div className="sectionOneTextMain">
              <img
                src={ESsectionOneHeading}
                className="SEsectioOnepic"
                alt="pic"
              />
              <p className="SEsectioOnetext">Sign In or Create an Account</p>
            </div>
          </div>
          <div className="row justify-content-center d-flex p-5">
              <div className="col-md-6">
             <SectionOneCard/>
             

              </div>
              <div className="col-md-6">
              <SectionOneCard/>

              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
