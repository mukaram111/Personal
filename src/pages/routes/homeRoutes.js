import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import EventCardDetail from "components/events/EventCardDetail";
import MainFooterPages from "components/footers/footerPages/MainFooterPages";
import BlogMain from "components/blog/BlogMain";
import BuilderMain from "components/builder/BuilderMain";
import DAOMain from "components/dao/DAOMain";
import EventMain from "components/events/EventMain";
import MarketPlaceMain from "components/marketplace/MarketPlaceMain";
import SectionOneModal from "components/startExploring/SectionOneModal";
import DOCS from "../docs/DOCS";
import Home from "../home/home";
import StartExploring from "../startExploring/startExploring";
import PrivacyPolicy from "components/footers/footerPages/PrivacyPolicy";
import ContentPolicy from "components/footers/footerPages/ContentPolicy";
import TermofUse from "components/footers/footerPages/TermofUse";
import CodeOfEthics from "components/footers/footerPages/CodeOfEthics";
import LogoAndName from "components/footers/footerPages/LogoAndName";
import Security from "components/footers/footerPages/Security";

const HomeRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/startExploring" component={StartExploring} />
          <Route path="/SectionOneModal" component={SectionOneModal} />
          {/* <Route exact path="/"/> */}
          <Route path="/DOCS" component={DOCS} />
          <Route path="/MarketPlaceMain" component={MarketPlaceMain} />
          <Route path="/BuilderMain" component={BuilderMain} />
          <Route path="/EventMain" component={EventMain} />
          <Route path="/DAOMain" component={DAOMain} />
          <Route path="/BlogMain" component={BlogMain} />
          <Route path="/EventCardDetail" component={EventCardDetail} />

          {/* -------------------------Footer Routes------------------- */}

          <Route path="/MainFooterPages" component={MainFooterPages} />
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route path="/ContentPolicy" component={ContentPolicy} />
          <Route path="/TermOfUse" component={TermofUse} />
          <Route path="/CodeOfEthics" component={CodeOfEthics} />
          <Route path="/LogoAndName" component={LogoAndName} />
          <Route path="/Security" component={Security} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default HomeRoutes;
