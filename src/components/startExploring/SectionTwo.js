import React, { useState } from "react";

import "./startExploringStyle.css";

const SectionTwo = () => {
  const [showdataOne, setShowdataOne] = useState(false);
  const [showdataTwo, setShowdataTwo] = useState(false);
  const [showdataThree, setShowdataThree] = useState(false);
  const [showdataFour, setShowdataFour] = useState(false);
  const [showdataFive, setShowdataFive] = useState(false);

  const showDataOne = () => {
    setShowdataOne((prev) => !prev);
  };
  const showDataTwo = () => {
    setShowdataTwo((prev) => !prev);
  };
  const showDataThree = () => {
    setShowdataThree((prev) => !prev);
  };
  const showDataFour = () => {
    setShowdataFour((prev) => !prev);
  };
  const showDataFive = () => {
    setShowdataFive((prev) => !prev);
  };

  return (
    <>
      <div className="SEsectionTwoMain">
        <div className="container">
          <div className="row">
            <p className="SEsectionTwoHeading">Beginner's Guide</p>
          </div>
          {/* -----------------First------------------- */}
          <div className="row pt-3">
            <p
              style={{ cursor: "pointer" }}
              className="SEsectionTwoMainText"
              onClick={showDataOne}
            >
              {showdataOne ? <span>-</span> : <span>+</span>}
              &nbsp; What do I need to{" "}
              <strong className="MainTextChange">play</strong>?
            </p>
            {showdataOne ? (
              <div className="SectionTwoInnerText">
                <ul>
                  <li>
                    <p>Can I play on a mobile device?</p>
                    <p>
                      For the moment we don’t support mobile devices. But please
                      stay tuned!
                    </p>
                  </li>
                  <li>
                    <p>Can I log in from multiple computers?</p>
                    <p>
                      Yes, you can run Game from multiple computers as long as
                      you have your digital wallet installed on each machine.
                    </p>
                  </li>
                  <li>
                    <p>Can I use a different browser?</p>
                    <p>
                      While it may be technically possible to use another
                      browser, we recommend Chrome or Firefox to ensure optimal
                      performance.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* --------------------Second------------------ */}
          <div className="row pt-4">
            <p
              style={{ cursor: "pointer" }}
              className="SEsectionTwoMainText"
              onClick={showDataTwo}
            >
              {showdataTwo ? <span>-</span> : <span>+</span>}
              &nbsp; What is a{" "}
              <strong className="MainTextChange">Wallet</strong> and why do I
              need one?
            </p>
            {showdataTwo ? (
              <div className="SectionTwoInnerText">
                <p>
                  If you want to fully enjoy the Game experience, we recommend
                  you get yourself a digital wallet. Digital wallets work as
                  your personal account, keeping all your digital assets (such
                  as names, collectibles, LANDs) and in-world progress safe.
                </p>
                <p>
                  If you choose to experience Game Explorer without a wallet,
                  the information will only be stored locally: you will be able
                  to walk around, customize your Avatar and chat with others
                  in-world, but you won’t have the chance to receive daily
                  rewards, participate in events or log in with a different
                  device using the same Guest ID and Avatar.
                </p>
                <p>
                  If this is the first time you’re hearing about digital
                  wallets, we recommend reading
                  <a className="colorChange">Get a Wallet – Beginners Guide</a>
                </p>
              </div>
            ) : null}
          </div>
          {/* ---------------------Third---------------- */}
          <div className="row pt-4">
            <p
              style={{ cursor: "pointer" }}
              className="SEsectionTwoMainText"
              onClick={showDataThree}
            >
              {showdataThree ? <span>-</span> : <span>+</span>}
              &nbsp; What is <strong className="MainTextChange">MANA</strong>?
            </p>
            {showdataThree ? (
              <div className="SectionTwoInnerText">
                <p>
                  MANA is Game’s fungible, ERC20 cryptocurrency token. MANA is
                  burned, or spent, in exchange for LAND parcels. For a current
                  summary of critical stats like total and circulating supply,
                  please visit our MANA Token Information transparency
                  dashboard. See the <a className="colorChange">Glossary</a> for
                  more information.
                </p>
              </div>
            ) : null}
          </div>
          {/* -----------------Fourth----------- */}
          <div className="row pt-4">
            <p
              style={{ cursor: "pointer" }}
              className="SEsectionTwoMainText"
              onClick={showDataFour}
            >
              {showdataFour ? <span>-</span> : <span>+</span>}
              &nbsp; What is <strong className="MainTextChange">LAND</strong>?
            </p>
            {showdataFour ? (
              <div className="SectionTwoInnerText">
                <p>
                  LAND is a non-fungible digital asset maintained in an Ethereum
                  smart contract. LAND is divided into parcels that are
                  referenced using unique x,y cartesian coordinates. Each LAND
                  token includes a record of its coordinates, its owner, and a
                  reference to a content description file or parcel manifest
                  that describes and encodes the content the owner wishes to
                  serve on his or her land.
                </p>
              </div>
            ) : null}
          </div>
          {/* -----------Fifth------------------------------- */}
          <div className="row pt-4">
            <p
              style={{ cursor: "pointer" }}
              className="SEsectionTwoMainText"
              onClick={showDataFive}
            >
              {showdataFive ? <span>-</span> : <span>+</span>}
              &nbsp; What is the{" "}
              <strong className="MainTextChange">Marketplace</strong>?
            </p>
            {showdataFive ? (
              <div className="SectionTwoInnerText">
                <p>
                  The Marketplace is the go-to place to trade and manage all
                  your Game on-chain assets. Access the Marketplace at{" "}
                  <a className="colorChange">market.Game.org</a>.
                </p>
                <p>The Marketplace allows you to:</p>

                <ul>
                  <li>
                    <p>
                      Sell parcels and Estates of LAND, wearables and unique
                      names. Set your own price in MANA and an expiration date
                      for the offer.
                    </p>
                  </li>
                  <li>
                    <p>
                      Buy parcels and Estates, wearables and unique names that
                      are for sale.
                    </p>
                  </li>
                  <li>
                    <p>Transfer your parcels and Estates to another user.</p>
                  </li>
                  <li>
                    <p>
                      Explore the world through a map to see who owns what, what
                      wearables exist and what names are claimed.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* -------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
