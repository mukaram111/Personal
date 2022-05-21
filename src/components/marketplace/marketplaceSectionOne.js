import React from "react";
import { Link } from "react-router-dom";

import "./marketplace.css";

const MarketplaceSectionOne = () => {
  return (
    <div className="MarketMain">
      <div className="container">
        <div>
          <p className="MarketTitle">Decentraland Marketplace</p>
          <p className="MarsectionOneText">
            Welcome to the virtual world’s one-stop-shop for the very best
            digital assets.
          </p>
        </div>
        <div className="pt-4">
          <button className="marketbtnOne btnanimated">
            <Link to="/BrowsingMain"> START BROWSING </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSectionOne;
