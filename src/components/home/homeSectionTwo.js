import React from "react";
import { Link } from "react-router-dom";

const HomeSectionTwo = () => {
  return (
    <div className="SectionTwoMain">
      <div className="container">
        <div className="row">
          <div className="col-md-6 center">
            <p className="sectionTwoTitle">Explore</p>
            <p className="sectionTwoHeading">
              Lose yourself in an amazing, evolving world
            </p>
            <p className="sectionTwoText">
              Explore LANDs owned by users to experience incredible scenes and
              structures. From a space adventure to a medieval dungeon maze to
              entire villages crafted from the minds of community members.
            </p>
            <button className="homeSectionOnebtn btnanimated">
              <Link className="textcolor" to="/startExploring">
                start exploring
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
