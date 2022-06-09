import React from "react";

const HomeSectionEight = () => {
  return (
    <div className="SectionEightMain">
      <div className="container">
        <div className="row">
          {/* ------left section------- */}
          <div className="col-md-6 center">
            <p className="sectionEightHeading">Contact us</p>
            <p className="sectionEightText">
              You’ll find us at all hours on Discord. You can also reach us
              through the usual channels.
            </p>
            <button className="homeSectionEightbtn btnanimated">
              get in touch
            </button>
          </div>
          {/* --------right Section--------- */}
          <div className="col-md-6 center">
            <p className="sectionEightHeading">Get the latest updates</p>
            <p className="sectionEightText">
              Breaking news on events, competitions and new developments in
              Lorem, delivered straight to your inbox
            </p>
            <form className="sectionEightForm">
              <div className="">
                <input
                  placeholder="email@domain.com"
                  className="sectionEightInput"
                />
                <button className="homeEightbtn homeSectionEightbtn btnanimated">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionEight;
