import React from "react";
import { Link } from "react-router-dom";
import { Input, FormGroup, Label } from "reactstrap";

// import "./dropdown.css";
import "./sideBar.scss";
const DocSidebar = () => {
  return (
    <>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
          multiple
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>

      <div class="dropdown show">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>

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
                  <li>
                    <Link to="/FQA">FQA</Link>
                  </li>
                  <li>
                    DAO
                    <ul>
                      <li>
                        Overview
                        <ul>
                          <li>
                            <Link to="/DocsDAO">What Is The DAO?</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">DAO Uses</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">How The DAO Works</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">The DAO's Smart Contracts</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">The DAO Fund</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">DAO Limitations</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">
                              Participations Requirements
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Grants
                        <ul>
                          <li>
                            <Link to="/DocsDAO">Community Grants</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">Requesting Grants</Link>
                          </li>
                          <li>
                            <Link to="/DocsDAO">Receiving Grants</Link>
                          </li>
                        </ul>
                      </li>
                      <li>DAO User Guide</li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/WhitePaper">WhitePaper</Link>
                  </li>
                  <li>
                    <Link to="HardwareAcceleration">Hardware Acceleration</Link>
                  </li>
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
