import React from "react";

import location from "../../assets/images/location.svg";
import arrow from "../../assets/images/arrow.svg";
import cardBtnImg from "../../assets/images/cardBtnImg.svg";
import share from "../../assets/images/share.svg";

import "./Events.css";
import { useHistory } from "react-router-dom";

const SectionThreeEvents = () => {
  const history = useHistory();

  const CardDetail = () => {
    history.push("/EventCardDetail");
  };

  return (
    <>
      <div
        className="container"
        style={{ minHeight: "550px", paddingBottom: "10%" }}
      >
        <div className="row pt-5">
          <p>MARCH</p>
        </div>
        <div className="row">
          {/* -------------------------------------------------------------------------------- */}

          <div
            className="col-md-4 EventSectionThreeMain btnanimated"
            onClick={CardDetail}
          >
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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

          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          <p></p>
          <p></p>
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          <p></p>
          <p></p>
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          {/* --------------------------------------------------------------------------------------------- */}

          <div className="col-md-4 EventSectionThreeMain btnanimated">
            <div className="row h-100">
              <div className="col-md-12 EventSectionThreeImg">
                <p className="numberCard">+11</p>
              </div>
              <div className="col-md-12">
                <div className="row pt-3">
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
                <div className="row pt-3 pl-1">
                  <h5>Lottie London x Chaun Legend Pre-Launch Party</h5>
                </div>
                <div style={{ paddingTop: "5%" }} className="d-flex">
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
          {/* --------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default SectionThreeEvents;
