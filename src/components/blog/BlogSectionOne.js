import React from "react";

import BlogSectionOnePic from "../../assets/images/blogSectionOnePic.jpg";
import BlogNavbar from "../navBars/blogNavbar";

import "./blog.css";

const BlogSectionOne = () => {
  return (
    <>
      <div className="container">
        <BlogNavbar />
      </div>
      <hr />
      <div className="container">
        <div className="row pt-4 ">
          <div className="col-md-8 pt-3">
            <img
              className="blogSectionOnePic btnanimated"
              src={BlogSectionOnePic}
              alt="pic"
            />
          </div>
          <div className="col-md-4 pt-4">
            <div>
              <span className="BlogCardTextsecOne">
                Mar 25, 2022 &nbsp; &nbsp;
              </span>
              <span className="BlogCardTextTwosecOne">
                &nbsp; &nbsp;Announcements
              </span>
            </div>
            <div>
              <p className="BlogHeadText pt-2">
                Let's party at Metaverse Fashion Week
              </p>
              <p className="BlogSubText pt-4">
                Grimes, in Collaboration with Auroboros, will Close MVFW with a
                Huge After Party and Concert!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSectionOne;
