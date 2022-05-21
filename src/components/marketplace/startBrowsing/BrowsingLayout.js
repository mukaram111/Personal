import DaoNavbar from "components/navBars/daoNavbar";
import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const BrowsingLayout = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <DaoNavbar />
        <div className="borderBottom">
          <div className="container ">
            <div className="row ">
              <ul className="browsingHeader">
                <li>
                  <Link className="B_HeaderItems">Land</Link>
                </li>
                <li>
                  <Link className="B_HeaderItems">Collectibles</Link>
                </li>
                <li>
                  <Link className="B_HeaderItems">My Store</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-3">
              <div className="listingBox">
                <p>
                  <strong>TYPE </strong>
                </p>
                <div className="storeBox">
                  <p className="storeText mb-0">Store</p>
                  <p className="storeSubText">Items available for minting</p>
                </div>
                <p className="storeText mb-0">Listings</p>
                <p className="storeSubText">Items being resold</p>
              </div>
              <p className="pt-4">CATEGORIES</p>
              <p className="">
                <Link className="BrowserLink">Wearables</Link>
              </p>
              <select>
                <option>Head</option>
              </select>
            </div>
            <div className="col-md-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowsingLayout;
