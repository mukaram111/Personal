import React from "react";
import { Link } from "react-router-dom";

import DocsNavbar from "components/navBars/docsNavbar";
import HomeFooter from "../homeFooter";
import MainFooterPages from "./MainFooterPages";

import "./style.css";

const LogoAndName = () => {
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
              Terms of Use for Game's Logo and Name
            </p>
            <p className="footerText">
              Game is a decentralized virtual world governed by its users and as
              such strongly supports user generated content (UGC). People may
              use the Game logo and name in their creations within Game, but
              must follow the following terms.
            </p>
            <p className="FooterSubHeading">1. Allowable Usage.</p>
            <p className="footerText">
              Users shall comply with these terms as well as Game's Terms of Use
              (<Link className="footerTextLinks">https://Game.org/terms/</Link>)
              and Content Policy (
              <Link className="footerTextLinks">https://Game.org/content/</Link>
              ) in order to be allowed to use the Game name and logo within
              Game.
            </p>
            <p className="FooterSubHeading"> 2. Logo and name ownership.</p>
            <p className="footerText">
              The Game Foundation is the registered owner of the Game name and
              logo, acting for the benefit of the DAO. This is because currently
              the DAO lacks formal legal status.
            </p>
            <p className="FooterSubHeading">
              3. Wearables and user names in Game.
            </p>
            <p className="footerText">
              Users may create wearables and names using the Game logo and name
              on the Game platform, provided that they don't violate the
              platform's Content Policy and Terms of Use. As far as the Game
              Foundation is concerned, you are not prevented from monetizing or
              obtaining profits from the sale of said wearables or user names.
              The NFT must be unique in design.
            </p>
            <p className="footerText">
              The Game Foundation has the right to deny the use of the Game name
              and logo at its sole discretion in any case and at any time.
            </p>
            <p className="FooterSubHeading">
              {" "}
              4. NFTs and other uses outside the Game platform.
            </p>
            <p className="footerText">
              The Game Foundation does not authorize the creation of NFTs using
              the Game name or logo outside the Game platform. The use of the
              Game name or logo is not allowed in other virtual platforms
              different from Game or in the real world.
            </p>
            <p className="FooterSubHeading">5. Disclaimer.</p>
            <p className="footerText">
              In all written materials relating to your product, including
              websites, publications, etc. it must be made clear that you do not
              have any kind of affiliation, business partnerships or other
              official association with Game, the DAO or the Game Foundation.
            </p>
            <p className="FooterSubHeading">6. Press Releases.</p>
            <p className="footerText">
              Any press releases that you distribute through social networks,
              media or news services should clearly state that you do not have
              any kind of affiliation, business partnerships or other official
              association with Game, the DAO or the Game Foundation.
            </p>
            <p className="FooterSubHeading">7. Advertisements.</p>
            <p className="footerText">
              Any paid advertisement that uses the Game name or logo is
              generally not allowed and must first be approved by the Game
              Foundation or the DAO. To seek such approval, you can send an
              email to: legal@Game.org or through a DAO proposal.
            </p>
            <p className="FooterSubHeading">8. The Name "Game".</p>
            <p className="footerText">
              Subject to these terms you can use the name "Game" to promote your
              game(s) or wearables as long as it doesn't confuse consumers and
              as long as it is not used as the name of an app or any kind of
              merchandise or product. In other words, you can refer to "Game" as
              the name of the platform, and you can use the name to show your
              interest in or affection for the Game platform.
            </p>
            <p className="FooterSubHeading">9. The Logo "Game".</p>
            <p className="footerText">
              Subject to these terms, you are only allowed to use the logo
              design that is available at the following
              linkhttps://www.figma.com/file/pBiYuNALsSEFncGy3x6dIZ/GameLogo?node-id=3162%3A117.
              The Game Foundation or the DAO may alter the form of this design
              from time to time. You are allowed to resize the logo as long as
              you do not modify the proportions. But otherwise, you cannot
              modify the logo design in any way and must abide by these terms.
            </p>
            <p className="FooterSubHeading">10. Additional Rules.</p>
            <p className="footerText">
              THE USE OF Game LOGO AND NAME CANNOT BE ASSOCIATED WITH ANYTHING
              THAT VIOLATES THE RIGHTS OF OTHER THIRD PARTIES IP, CREATES BRAND
              CONFUSION, HAS HARMFUL OR OBJECTIONABLE ASPECTS OR DOES NOT COMPLY
              WITH APPLICABLE LAWS OR ANY OF Game GUIDELINES, TERMS OR RULES.
              THE DAO AND THE Game FOUNDATION HAVE THE RIGHT TO DECIDE (IN THEIR
              SOLE DISCRETION) WHETHER THE USE IS ACCEPTABLE.
            </p>{" "}
            <p className="footerText">
              YOU MUST NOT USE THE Game NAME OR LOGO IN ANY MANNER THAT IS
              LIKELY TO HAVE AN ADVERSE EFFECT ON THE REPUTATION OF Game (AS THE
              DAO OR Game FOUNDATION MAY DETERMINE IN THEIR SOLE DISCRETION).
              YOU MAY NOT USE THE Game NAME OR LOGO IN ANY WAY THAT SUGGESTS
              THAT YOU ARE AFFILIATED WITH Game, THE DAO OR THE Game FOUNDATION,
              OR IN ANY WAY THAT SUGGESTS THAT Game, THE DAO OR THE Game
              FOUNDATION SPONSORS OR ENDORSES YOUR USAGE.
            </p>
            <p className="footerText">
              These terms grant you permission to use the Game trademarks only
              in the ways described above. The Game Foundation or the DAO may
              withdraw or change this permission at any time for any reason.
            </p>
            <p className="footerText">
              Other uses of the Game logo and name require the express approval
              of the Game Foundation or the DAO.
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default LogoAndName;
