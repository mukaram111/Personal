import React from "react";
import greaterSign from "../../assets/images/download (1).svg";
import cardpic1 from "../../assets/images/governance.png";
import cardpic2 from "../../assets/images/transparency-os.jpg";

import "./home.css";
const HomeSectionSeven = () => {
  return (
    <>
      <div className="SectionSevenMain">
        <div className="container">
          <div className="row pt-2 pb-5">
            <div className="col-md-12 d-flex justify-content-between">
              <div>
                <p className="sectionEightHeading">From the blog</p>
              </div>
              <div className="pt-4">
                <a href="#" className="moreArticle">
                  more articles
                  <img src={greaterSign} alt="greater sign" className="pl-2" />
                </a>
              </div>
            </div>
            {/* -----Cards------- */}
            <div className="row pt-3">
              <div className="col-md-4  col-12  animated">
                <div>
                  <img
                    className="img-fluid HomecardImg"
                    src={cardpic1}
                    alt="card pic"
                  />
                </div>
                <div className="cardBody">
                  <p className="homeCardText">
                    <span className="CardDate">Mar 01 </span>
                    <span>ANNOUNCEMENT DAO DAO-COMMITTEE-REPORT</span>
                  </p>
                  <p className="homeCardTextTwo">
                    Guest Post: DAO Committee Report #0017
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12  animated">
                <div>
                  <img
                    className="img-fluid HomecardImg"
                    src={cardpic2}
                    alt="card pic"
                  />
                </div>
                <div className="cardBody">
                  <p className="homeCardText">
                    <span className="CardDate">Feb 15 </span>
                    <span>ANNOUNCEMENT DAO GOVERNANCE-SQUAD</span>
                  </p>
                  <p className="homeCardTextTwo">
                  Introducing the Transparency OS
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12  animated">
                <div> 
                  <img
                    className="img-fluid HomecardImg"
                    src={cardpic1}
                    alt="card pic"
                  />
                </div>
                <div className="cardBody">
                  <p className="homeCardText">
                    <span className="CardDate">Meb 07 </span>
                    <span>ANNOUNCEMENT DAO DAO-COMMITTEE-REPORT</span>
                  </p>
                  <p className="homeCardTextTwo">
                  Guest Post: DAO Committee Report #0016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionSeven;
