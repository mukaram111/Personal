import React from "react";

import location from "../../assets/images/location.svg";
import arrow from "../../assets/images/arrow.svg";

import "./Events.css";

const SectionTwoEvents = () => {
  return (
    <>
      
      <div className="container">
        <div className="row pt-5">
          <p>TRENDING</p>
        </div>
        <div className="row">
        {/* ------------------------------------------------------------------- */}
          <div className="col-md-4 pl-2 ">
            <div className="row h-100 EventSectionTwoMain">
              <div className="col-md-3 EventSectionTwoImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <h6 className=" locationText pt-1">NOW </h6>
                  </div>
                  <div className="col-md-6 pt-2 d-flex ">
                    <button className="locationbtn">
                      <img src={location} alt="pic" />
                      103,07
                    </button>
                    <button className="livebtn spacingbtn">
                      <img src={arrow} alt="pic" />
                    </button>
                  </div>
                </div>
                <div className="row pt-2 pl-1">
                  <h5>MVFW - Unplanned Paths</h5>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------Card One--------------------- */}
          <div className="col-md-4 pl-2">
            <div className="row h-100 EventSectionTwoMain btnanimated">
              <div className="col-md-3 EventSectionTwoImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <h6 className=" locationText pt-1">NOW </h6>
                  </div>
                  <div className="col-md-6 pt-2 d-flex ">
                    <button className="locationbtn">
                      <img src={location} alt="pic" />
                      103,07
                    </button>
                    <button className="livebtn spacingbtn">
                      <img src={arrow} alt="pic" />
                    </button>
                  </div>
                </div>
                <div className="row pt-2 pl-1">
                  <h5>MVFW - Unplanned Paths</h5>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionTwoMain btnanimated">
            <div className="row h-100">
              <div className="col-md-3 EventSectionTwoImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <h6 className=" locationText pt-1">NOW </h6>
                  </div>
                  <div className="col-md-6 pt-2 d-flex ">
                    <button className="locationbtn">
                      <img src={location} alt="pic" />
                      103,07
                    </button>
                    <button className="livebtn spacingbtn">
                      <img src={arrow} alt="pic" />
                    </button>
                  </div>
                </div>
                <div className="row pt-2 pl-1">
                  <h5>MVFW - Unplanned Paths</h5>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <p></p>
          <p></p>
          <div className="col-md-4 EventSectionTwoMain btnanimated">
            <div className="row h-100">
              <div className="col-md-3 EventSectionTwoImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <h6 className=" locationText pt-1">NOW </h6>
                  </div>
                  <div className="col-md-6 pt-2 d-flex ">
                    <button className="locationbtn">
                      <img src={location} alt="pic" />
                      103,07
                    </button>
                    <button className="livebtn spacingbtn">
                      <img src={arrow} alt="pic" />
                    </button>
                  </div>
                </div>
                <div className="row pt-2 pl-1">
                  <h5>MVFW - Unplanned Paths</h5>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default SectionTwoEvents;
