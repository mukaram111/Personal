import React from "react";

import "./dao.css";

const DAOSectionOne = () => {
  return (
    <>
      <div className="DAOSectionOneMain">
        <div className="container">
          <div className="row">
            <p className="text-center mainText">Lorem DAO</p>
            <p className="text-center subtitle">
              The virtual world in your hands
            </p>
            {/* ------------------------------------------------------------------------------------------------------------------- */}

            <p className="title text-center">
              <span className="title-word title-word-1">Help &nbsp;</span>
              <span className="title-word title-word-2">govern &nbsp;</span>
              <span className="title-word title-word-3">Lorem</span>
              {/* <span className="title-word title-word-4">text</span> */}
            </p>

            {/* ---------------------------------------------------------------------------------------------------------- */}
          </div>
          <div className=" text-center">
            <button className=" btnstylish sectionOneDAObtn btnanimated">
              Start Voting
            </button>
            &nbsp; &nbsp;
            <button className="sectionOneDAObtn ml-2 btnanimated">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOSectionOne;
