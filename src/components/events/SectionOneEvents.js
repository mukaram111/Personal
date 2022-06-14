import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import cardBtnImg from "../../assets/images/cardBtnImg.svg";
import arrow from "../../assets/images/arrow.svg";
import clock from "../../assets/images/clock.svg";
import carsualPic1 from "../../assets/images/carsualPic (1).png";
import carsualPic2 from "../../assets/images/carsualPic2.png";
import carsualPic3 from "../../assets/images/carsualPic3.png";
import location from "../../assets/images/location.svg";
import share from "../../assets/images/share.svg";

import "./Events.css";
import "../home/HomeSectionFiveCarsual.css";

const SectionOneEvents = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="container carsualMain btnanimated">
              <div className="row">
                <div className="col-md-7 p-0 col-sm-12">
                  <img
                    className="d-block w-100 EvevtCarsualPic"
                    src={carsualPic1}
                    alt="First slide"
                  />
                </div>
                <div className="col-md-5 p-2 col-sm-12">
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
          </Carousel.Item>

          {/* ---------------------Card One----------------------- */}

          <Carousel.Item>
            <div className="container carsualMain btnanimated">
              <div className="row">
                <div className="col-md-7 p-0 col-sm-12">
                  <img
                    className="d-block w-100 EvevtCarsualPic"
                    src={carsualPic1}
                    alt="First slide"
                  />
                </div>
                <div className="col-md-5 p-2 col-sm-12">
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
                    <div style={{ paddingTop: "15%" }}>
                      <button className="cardBtn btnanimated ">
                        JUMP IN
                        <img
                          src={cardBtnImg}
                          className="cardBtnImg"
                          alt="cardBtnImg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* --------------------------Card Two-------------------------- */}

          <Carousel.Item>
            <div className="container carsualMain btnanimated">
              <div className="row">
                <div className="col-md-7 p-0 col-sm-12">
                  <img
                    className="d-block w-100 EvevtCarsualPic"
                    src={carsualPic2}
                    alt="First slide"
                  />
                </div>
                <div className="col-md-5 p-2 col-sm-12">
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
                    <div style={{ paddingTop: "15%" }}>
                      <button className="cardBtn btnanimated ">
                        JUMP IN
                        <img
                          src={cardBtnImg}
                          className="cardBtnImg"
                          alt="cardBtnImg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* ---------------------card Three------------ */}

          <Carousel.Item>
            <div className="container carsualMain btnanimated">
              <div className="row">
                <div className="col-md-7 p-0 col-sm-12">
                  <img
                    className="d-block w-100 EvevtCarsualPic"
                    src={carsualPic3}
                    alt="First slide"
                  />
                </div>
                <div className="col-md-5 p-2 col-sm-12">
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
                    <div style={{ paddingTop: "15%" }}>
                      <button className="cardBtn btnanimated ">
                        JUMP IN
                        <img
                          src={cardBtnImg}
                          className="cardBtnImg"
                          alt="cardBtnImg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* --------------------------------Card Five--------------------- */}
          <Carousel.Item>
            <div className="container carsualMain btnanimated">
              <div className="row">
                <div className="col-md-7 p-0 col-sm-12">
                  <img
                    className="d-block w-100 EvevtCarsualPic"
                    src={carsualPic2}
                    alt="First slide"
                  />
                </div>
                <div className="col-md-5 p-2 col-sm-12">
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
                    <div style={{ paddingTop: "15%" }}>
                      <button className="cardBtn btnanimated ">
                        JUMP IN
                        <img
                          src={cardBtnImg}
                          className="cardBtnImg"
                          alt="cardBtnImg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* --------------------------------------------------------------------------- */}
        </Carousel>
      </div>
    </>
  );
};

export default SectionOneEvents;
