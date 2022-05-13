import React, { useState } from "react";

import BlogSectionThree from "../blog/BlogSectionThree";
import DocsNavbar from "../navBars/docsNavbar";
import DocSidebar from "./sidebar";
import HomeFooter from "../footers/homeFooter";
import DocsSectionOne from "./DocsSectionOne";

const DocsMain = () => {
  return (
    <>
      <div className="row p-0 m-0">
        {" "}
        <DocsNavbar />
        <div className="col-md-3">
          <DocSidebar />
        </div>
        <div className="col-md-9">
          <DocsSectionOne />
          <BlogSectionThree />
        </div>
        <HomeFooter />
      </div>
    </>
  );
};

export default DocsMain;
