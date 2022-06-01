import React from "react";
import { Link } from "react-router-dom";

// import "./dropdown.css";

const DocSidebar = () => {
  return (
    <>
      {/* ///////////////////////////////////////////////////// */}

      <div className="container">
        <div className="row">
          <div className="">
            <ul>
              <li>
                <Link to="/DOCS"> Home</Link>
              </li>
              <li>
                World
                <ul>
                  <li>
                    <Link to="/Introduction">Introduction</Link>
                  </li>
                  <li>
                    <Link to="/Docs_World_System_Requirements">
                      System Requirements
                    </Link>
                  </li>
                  <li>FQA</li>
                  <li>WhitePaper</li>
                </ul>
              </li>
              <li>
                Market
                <ul>
                  <li>LAND Manager</li>
                  <li>Get Parcel Info</li>
                </ul>
              </li>
              <li>
                Create
                <ul>
                  <li>Creating Content</li>
                  <li>SDK</li>
                  <li>Turtorials</li>
                </ul>
              </li>
              <li>
                Ethereum essentials
                <ul>
                  <li>Glossary</li>
                  <li> About The BlockChain</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocSidebar;
