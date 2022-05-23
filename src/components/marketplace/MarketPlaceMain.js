import React from "react";

import BuilderNavbar from "components/navBars/builderNavbar";
import MarketplaceSectionOne from "./marketplaceSectionOne";

import "./marketplace.css";
import MarketPlaceSecTwo from "./MarketPlaceSecTwo";
// import MarketPlaceSecThree from "./MarketPlaceSecThree";
import HomeFooter from "components/footers/homeFooter";

const MarketPlaceMain = () => {
  return (
    <>
      <div className="MarketMainHead pb-5">
        <div className="">
          <div className="container">
            {" "}
            <BuilderNavbar />
          </div>
          <div className="container">
            <MarketplaceSectionOne />
            <MarketPlaceSecTwo />
            {/* <MarketPlaceSecThree/> */}
            {/* <HomeFooter/> */}
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      {/* <h1 className="marketplaceMain">Marketplace is Coming Soon...</h1> */}
      <HomeFooter className="pt-3" />
    </>
  );
};

export default MarketPlaceMain;
