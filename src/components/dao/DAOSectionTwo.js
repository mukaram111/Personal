import React from "react";

import SectionTwoDAOPic from "../../assets/images/DAOSectionTwoPic.png";

const DAOSectionTwo = () => {
  return (
    <>
      <div className="container DAOSectionTwoMain d-flex">
        <div className="col-md-5">
          <img src={SectionTwoDAOPic} alt="pic" className="sectionTwopicDao" />
        </div>
        <div className="col-md-7 pt-4">
          <p className="DAOTextHeading">What is the Lorem DAO?</p>
          <p className="DAOSubText">
            DAO stands for "Decentralized Autonomous Organization". The
            Lorem DAO owns the most important smart contracts and assets
            that make up Lorem – the LAND Contract, the Estates Contract,
            Wearables, Content Servers and the Marketplace. It also owns a
            substantial purse of MANA which allows it to be truly autonomous as
            well as subsidize various operations and initiatives throughout
            Lorem.
          </p>
        </div>
      </div>
    </>
  );
};

export default DAOSectionTwo;
