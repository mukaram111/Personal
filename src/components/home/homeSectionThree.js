import React from "react";
import "./home.css";
const HomeSectionThree = () => {
  return (
    <>
      <div className="SectionThreeMain">
        <div className="container">
          <div className="row">
          <div className="col-md-6"></div>
            <div className="col-md-6 center">
              <p className="sectionTwoTitle">Create</p>
              <p className="sectionTwoHeading">
                Test the limits of your imaginations
              </p>
              <p className="sectionTwoText">
                Create scenes, artworks, challenges and more, using the simple
                Builder tool, then take part in events to win prizes. For more
                experienced creators, the SDK provides the tools to fill the
                world with social games and applications.
              </p>
              <button className="homeSectionOnebtn btnanimated">start building</button>
              <button className="homeSectionThreebtn btnanimated">start developing</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionThree;
