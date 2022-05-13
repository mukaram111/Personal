import EventCardDetail from "components/events/EventCardDetail";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BlogMain from "../../components/blog/BlogMain";
import BuilderMain from "../../components/builder/BuilderMain";
import DAOMain from "../../components/dao/DAOMain";
import EventMain from "../../components/events/EventMain";
import MarketPlaceMain from "../../components/marketplace/MarketPlaceMain";
import PrivacyPolicyMain from "../../components/PrivacyPolicy/PrivacyPolicyMain";
import SectionOneModal from "../../components/startExploring/SectionOneModal";
import DOCS from "../docs/DOCS";
import Home from "../home/home";
import StartExploring from "../startExploring/startExploring";

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
          <Route path="/PrivacyPolicyMain" component={PrivacyPolicyMain} />
          <Route path="/EventCardDetail" component={EventCardDetail} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default HomeRoutes;
