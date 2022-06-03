import React from "react";
import { Link } from "react-router-dom";

import DocsNavbar from "components/navBars/docsNavbar";
import DocSidebar from "components/docs/sidebar";
import HomeFooter from "components/footers/homeFooter";
import FQADocPic from "assets/images/faqs-rarities-2.png";

import "components/docs/docsPages/docPagesStyle.css";

const FQA = () => {
  return (
    <div className="row p-0 m-0">
      {" "}
      <DocsNavbar />
      <div className="col-md-3 ">
        <DocSidebar />
      </div>
      <div className="col-md-9 pb-5">
        <div className="container">
          <p className="DocsMainHeading">FAQ</p>
          <p className="DocsSubHeading pt-4">
            What equipment or software do I need to play in Decentraland?
            <span className="hashColor">#</span>
          </p>
          <p className="DocsText">
            A PC or Mac running Chrome, Firefox or Brave. See{" "}
            <Link className="DocsTextLinks">system requirements</Link>
          </p>
          <li className="DocsTextBold">Can I play on a mobile device?</li>
          <p className="DocsText">
            For the moment we don’t support mobile devices. But please stay
            tuned!
          </p>
          <li className="DocsTextBold">
            Can I log in from multiple computers?
          </li>
          <p className="DocsText">
            Yes, you can run Decentraland from multiple computers as long as you
            have your digital wallet installed on each machine.
          </p>
          <li className="DocsTextBold">Can I use a different browser?</li>
          <p className="DocsText">
            While it may be technically possible to use another browser, we
            recommend Chrome, Firefox or Brave to ensure optimal performance.
          </p>
          <p className="DocsSubHeading pt-3">
            Do I need a wallet to play in Decentraland?
            <span className="hashColor">#</span>
          </p>
          <p className="DocsText">
            If you want to fully enjoy the Decentraland experience, we recommend
            you get yourself a digital wallet. Digital wallets work as your
            personal account, keeping all your digital assets (such as names,
            collectibles, LANDs) and in-world progress safe.
          </p>
          <p className="DocsText">
            If you choose to experience Decentraland Explorer without a wallet,
            the information will only be locally stored: you will be able to
            walk around, customize your Avatar and chat with others in-world,
            but you won’t have the chance to receive daily rewards, participate
            in events or log in with a different device using the same Guest ID
            and Avatar.
          </p>
          <p className="DocsText">
            If this is the first time you’re hearing about digital wallets, we
            recommend reading
            <Link className="DocsTextLinks">
              {" "}
              Get a Wallet – Beginners Guide
            </Link>
            .
          </p>
          <p className="DocsSubHeading pt-3">
            I lost my digital wallet! What happens with my account?{" "}
            <span className="hashColor">#</span>
          </p>
          <p className="DocsText">
            If you lose access to your wallet you will lose your Avatar, name,
            any of the wearables or NFT items stored within. Please remember to
            always keep your wallet recovery pass phrases in a safe and secure
            location.
          </p>
          <p className="DocsSubHeading pt-3">
            What do the collectibles colors mean?{" "}
            <span className="hashColor">#</span>
          </p>
          <p>
            <img className="img-fluid" src={FQADocPic} alt="pic" />
          </p>
          <p className="DocsText">
            Each collectible is assigned a rarity category, represented by a
            different name and color and denoting supply of collectible.
          </p>
          <p className="DocsText">Their maximum issuance is:</p>
          <p className="DocsText">
            <li>Common: 100000</li>
            <li>Uncommon: 10000</li>
            <li>Rare: 5000</li>
            <li>Epic: 1000</li>
            <li>Legendary: 100</li>
            <li>Mythic: 10</li>
            <li>Unique: 1</li>
          </p>
          <p className="DocsSubHeading pt-3">
            Can I claim my Avatar name later?{" "}
            <span className="hashColor">#</span>
          </p>
          <p className="DocsText">
            Yes. Visit the Names page in the Builder to claim it. All you need
            is an installed digital wallet and at least 100 MANA to burn.
            Another alternative is to buy a name in the Decentraland
            Marketplace.
          </p>

          <div className=" docsBox p-4">
            <div>
              <p className="boxTextDocs">Was this article useful?</p>
            </div>
            <div className="docsBoxBtn">
              <button className="docsBoxBtnOne">Yes</button>&nbsp;&nbsp;
              <button className="docsBoxBtnTwo ">No</button>
            </div>
          </div>
          <p className="DocsText textRight">
            Have a suggestion?
            <span className="DocsTextLinks"> Edit this doc on GitHub</span>
          </p>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default FQA;
