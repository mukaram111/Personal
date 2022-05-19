import React from "react";

import DocsNavbar from "components/navBars/docsNavbar";
import MainFooterPages from "./MainFooterPages";

import "./style.css";
import { Link } from "react-router-dom";
import HomeFooter from "../homeFooter";

const Security = () => {
  return (
    <>
      <DocsNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <MainFooterPages />
          </div>
          <div className="col-md-9">
            <p className="FooterMainHeading">
              Vulnerability Disclosure Procedure
            </p>
            <p className="footerText">
              At Decentraland, we take every measure necessary to ensure the
              security of the platform. If you are a security researcher and
              took a look at some of our code, contracts, or websites and found
              a vulnerability, you're eligible for a bounty for doing a
              responsible disclosure of that bug.
            </p>
            <p className="FooterSubHeading"> 1. Code in Scope</p>
            <p className="footerText">
              The code from the following repositories is in scope of this
              program:
            </p>
            <p>
              <ul>
                <li>
                  <Link className="EthicsLink">marketplace</Link>
                </li>
                <li>
                  <Link className="EthicsLink">builder</Link>
                </li>
                <li>
                  <Link className="EthicsLink">kernel</Link>
                </li>
                <li>
                  <Link className="EthicsLink">ui</Link>
                </li>
                <li>
                  <Link className="EthicsLink">decentraland-dapps</Link>
                </li>
                <li>
                  <Link className="EthicsLink">builder-server</Link>
                </li>
                <li>
                  <Link className="EthicsLink">documentation</Link>
                </li>
                <li>
                  <Link className="EthicsLink">catalyst</Link>
                </li>
                <li>
                  <Link className="EthicsLink">land</Link>
                </li>
                <li>
                  <Link className="EthicsLink">marketplace-contracts</Link>
                </li>
                <li>
                  <Link className="EthicsLink">bid-contract</Link>
                </li>
              </ul>
              <p>As well as the following web properties:</p>
              <ul>
                <li>
                  <Link className="EthicsLink">*.decentraland.org</Link>
                </li>
                <li>
                  <Link className="EthicsLink">*.decentraland.zone</Link>
                </li>
                <li>
                  <Link className="EthicsLink">*.decentraland.today</Link>
                </li>
              </ul>
            </p>
            <p className="FooterSubHeading"> 2. Report the vulnerability</p>
            <p className="footerText">
              Please send us this detailed description to
              security@decentraland.org. Include an ethereum address that you
              control in order for the bounty to be awarded.
            </p>
            <p className="footerText">Such report should include:</p>
            <p className="footerText">
              <ul>
                <li>Conditions for the bug to be triggered</li>
                <li>Background and information about how the bug was found</li>
                <li>Instructions to find the critical lines affected</li>
                <li>Unit tests or instructions to trigger the bug</li>
              </ul>
            </p>
            <p className="FooterSubHeading">3. Compensation</p>
            <p className="footerText">
              Our team will assess each submission individually and assign a
              level of severity according to its likelihood and impact
              Compensation will depend on the severity of the issue found.
            </p>
            <p className="footerText">
              {" "}
              <strong>Low:</strong> Up to $1,500 USD
            </p>
            <p className="footerText">
              {" "}
              <strong>Medium:</strong> Up to $3,000 USD
            </p>
            <p className="footerText">
              {" "}
              <strong>High: </strong>Up to $6,000 USD
            </p>
            <p className="footerText">
              {" "}
              <strong>Critical:</strong> Up to $18,000 USD
            </p>
            <p className="footerText">
              Note that assesment and award of the bounty might take up to 60
              days to process and validate, and that the payment will be
              conducted in a stablecoin over the Ethereum network.
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default Security;
