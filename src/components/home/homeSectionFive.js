import React, { useState } from "react";

import cardImg1 from "../../assets/images/cardImg1.png";
import cardBtnImg from "../../assets/images/cardBtnImg.svg";
import SecFiveImg from "../../assets/images/743790596226de38.jpg";
import greaterSign from "../../assets/images/download (1).svg";
import SectionFiveCarsual from "./SectionFiveCarsual";

import "./home.css";
import "./HomeSectionFiveCarsual.css";

const HomeSectionFive = () => {
  // -------Carsual Function-----------

  return (
    <>
      <div className="SectionFiveMain">
        <div className="container">
          <div className="row pt-5" style={{ padding: "40px 25px 0 25px" }}>
            <div className="col-md-12">
              <p className="SectionFiveHeading">Can't decide where to start?</p>
            </div>
            <div className="col-md-12 justify-content-between d-flex pt-3">
              <div>
                <button className="SecFivebtn SectionFivebtn1">
                  upcoming events
                </button>
                <button className="SecFivebtn SectionFivebtn2">
                  point of interest
                </button>
              </div>
              <div>
                {" "}
                <a href="#" className="moreArticle">
                  more events
                  <img src={greaterSign} alt="greater sign" className="pl-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row m-0 pt-5 pb-5 justify-content-between"
          style={{ padding: "75px" }}
        >
          <div className="container">
            <SectionFiveCarsual />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionFive;
