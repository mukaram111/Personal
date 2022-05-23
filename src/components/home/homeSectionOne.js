import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const HomeSectionOne = () => {
  return (
    <>
      <div className="SectionOneMain">
        <div className="container">
          <div className="row center">
            <div className="sectionOneMainHeading">
              <h1 className="mainHeadingSectionone">Welcome to Lorem</h1>
            </div>
            <div className="col-md-6">
              <p className="subText">
                Create, explore and trade in the first-ever virtual world owned
                by its users.
              </p>
            </div>
            <div>
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
