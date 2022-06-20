import React from "react";
import { Link } from "react-router-dom";

import bgVedio from "../../assets/Vedios/Background Vedio.mp4";
import vedio from "../../assets/Vedios/home-section-One-bg.mp4";

import "./home.css";

const HomeSectionOne = () => {
  return (
    <>
      <div className="SectionOneMain ">
        <video autoPlay loop muted className="SectionOneVedio">
          <source src={bgVedio} type="video/mp4" />
        </video>

        <div className="container" style={{ postion: "absolute" }}>
          <div className="row ">
            <div className="sectionOneMainHeading">
              <h1 className="mainHeadingSectionone">Welcome to Lorem</h1>
            </div>
            <div className="col-md-6">
              <p className="subText">
                Create, explore and trade in the first-ever virtual world owned
                by its users.
              </p>
            </div>
            <div style={{ zIndex: "1" }}>
              <button className="homeSectionOnebtn btnanimated">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://rajaharris55.itch.io/nft-game"
                  alt="game Link"
                >
                  get started
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionOne;
