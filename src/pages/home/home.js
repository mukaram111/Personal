import React from "react";
import HomeFooter from "../../components/footers/homeFooter";
import HomeSectionEight from "../../components/home/homeSectionEight";
import HomeSectionFive from "../../components/home/homeSectionFive";
import HomeSectionFour from "../../components/home/homeSectionFour";
import HomeSectionOne from "../../components/home/homeSectionOne";
import HomeSectionSeven from "../../components/home/homeSectionSeven";
import HomeSectionSix from "../../components/home/homeSectionSix";
import HomeSectionThree from "../../components/home/homeSectionThree";
import HomeSectionTwo from "../../components/home/homeSectionTwo";
import HomeNavbar from "../../components/navBars/homeNavbar";

const Home = () => {
  return (
    <>
      <div className="row p-0 m-0">
        {" "}
        <HomeNavbar />
      </div>

      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionEight />
      <HomeFooter />
    </>
  );
};

export default Home;
