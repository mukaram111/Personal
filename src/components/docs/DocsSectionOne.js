import React from "react";

import "./docs.css";
import "../home/home.css";

const DocsSectionOne = () => {
  return (
    <>
      <p className="docMainHeading">Loerm documentation</p>
      <p className="docSubText">
        Find help about the various topics in each of these sections
      </p>
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-3">
            <div className="DocsCardMain btnanimated">
              <p className="docCaardTextOne">World</p>
              <p className="docCardTextTwo">
                Learn to build and share your creations.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <div className="DocsCardMain btnanimated">
              <p className="docCaardTextOne">World</p>
              <p className="docCardTextTwo">
                Learn to build and share your creations.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <div className="DocsCardMain btnanimated">
              <p className="docCaardTextOne">World</p>
              <p className="docCardTextTwo">
                Learn to build and share your creations.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <div className="DocsCardMain btnanimated">
              <p className="docCaardTextOne">World</p>
              <p className="docCardTextTwo">
                Learn to build and share your creations.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default DocsSectionOne;
