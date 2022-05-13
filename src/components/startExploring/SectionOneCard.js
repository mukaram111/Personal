import React from "react";
import { Link } from "react-router-dom";

import SEcardpic1 from "../../assets/images/wallet.jpg";
import SectionOneModal from "./SectionOneModal";
import { Modal, Button } from "react-bootstrap";

import "./startExploringStyle.css";

const SectionOneCard = () => {
  return (
    <>
      <div className="cards">
        <section className="sectionOnecard">
          <div className="img-overlay">
            {/* <p className=""style={{position:"absolute",zIndex:"2",paddingTop:"50%"}}>Play using your wallet</p> */}
            <img src={SEcardpic1} className="cardImgSectionOne" alt="Trulli" />

            {/* <p className="">
                Connect your account to fully enjoy Decentraland!
              </p> */}
            <div className="overlay">
            <p className="walletTextStand">Play using your wallet</p>
              <p className="walletText">Play using your wallet</p>
              <p className="walletTextTwo">
                Connect your account to fully enjoy Decentraland!
              </p>
              <div className="cardBtnMain">
                {/* <Link to="/SectionOneModal"></Link> */}
                <button className="walletbtn">
                  {" "}
                  <SectionOneModal />
                </button>
                {/* ------------------------------------------------------- */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionOneCard;
