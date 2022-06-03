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
import BrowsingMain from "components/marketplace/startBrowsing/BrowsingMain";
import Introduction from "components/docs/docsPages/World/Introduction";
import SystemRequirments from "components/docs/docsPages/World/SystemRequirments";
import FQA from "components/docs/docsPages/World/FQA";
import WhitePaper from "components/docs/docsPages/World/WhitePaper";
import HardwareAcceleration from "components/docs/docsPages/World/HardwareAcceleration";
import DocsDAO from "components/docs/docsPages/World/DocsDAO";

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
          {/* -------------------------MarketPlace--------------------------- */}
          <Route path="/BrowsingMain" component={BrowsingMain} />
          {/* --------------------------Docs------------------------------------- */}
          <Route path="/Introduction" component={Introduction} />
          <Route
            path="/Docs_World_System_Requirements"
            component={SystemRequirments}
          />
          <Route path="/FQA" component={FQA} />
          <Route path="/WhitePaper" component={WhitePaper} />
          <Route
            path="/HardwareAcceleration"
            component={HardwareAcceleration}
          />
          <Route path="/DocsDAO" component={DocsDAO} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default HomeRoutes;
