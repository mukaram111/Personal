import React from "react";

import EventCardDetailNavbar from "components/navBars/eventCardDetailNavbar";
import HomeFooter from "components/footers/homeFooter";

import carsualPic1 from "../../assets/images/carsualPic (1).png";
import cardBtnImg from "../../assets/images/cardBtnImg.svg";
import arrow from "../../assets/images/arrow.svg";
import clock from "../../assets/images/clock.svg";
import location from "../../assets/images/location.svg";
import share from "../../assets/images/share.svg";

import "./Events.css";

const EventCardDetail = () => {
  return (
    <>
      <div className="container">
        <EventCardDetailNavbar />
        {/* -------------------------------------------------------------------------- */}

        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12 p-0 col-sm-12">
              <img
                className="d-block w-70 EventCardPic"
                src={carsualPic1}
                alt="First slide"
              />
            </div>
            <div className="col-md-7 p-2 col-sm-12 pt-5 pb-5">
              <div className="row">
                <div className="col-md-2">
                  <div className="DateBox">
                    <h5>Mar</h5>
                    <h3>24</h3>
                  </div>
                </div>
                <div className="col-md-10">
                  <p className="carsualTextHead">Acura of Lorem!</p>
                  <p className="carsualInnerText">
                    Public, Organized by <span>ARTEMlS</span>
                  </p>
                </div>
              </div>
              <hr />
              <div className="row ">
                <div className="col-md-10 d-flex">
                  <img src={clock} alt="pic" />
                  <p className=" started">
                    Started: <sapn>2 days ago</sapn>
                  </p>
                </div>
                <div className="col-md-2 pt-2">
                  <button className="livebtn">LIVE</button>
                </div>
              </div>
              <hr />
              <div className="row ">
                <div className="col-md-8 d-flex">
                  <img
                    src={location}
                    style={{ width: "20px", height: "20px" }}
                    alt="pic"
                  />
                  <h5 className=" locationText">Genesis Plaza </h5>
                </div>
                <div className="col-md-4 pt-2 d-flex ">
                  <button className="locationbtn">
                    <img src={location} alt="pic" />
                    103,07
                  </button>
                  <button className="livebtn spacingbtn">
                    <img src={arrow} alt="pic" />
                  </button>
                </div>
                <div style={{ paddingTop: "15%" }} className="d-flex">
                  <button className="cardBtn btnanimated ">
                    JUMP IN
                    <img
                      src={cardBtnImg}
                      className="cardBtnImg"
                      alt="cardBtnImg"
                    />
                  </button>
                  <button className="btnanimated cardbtnshare">
                    <img src={share} alt="pic" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}
      </div>
      <HomeFooter />
    </>
  );
};

export default EventCardDetail;
