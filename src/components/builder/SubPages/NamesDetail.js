import React,{useState} from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import HexagonIcon from "../../../assets/images/hexagonIcon.svg";
import DetailPic from "../../../assets/images/NamesPic.svg";
import HomeFooter from "../../../components/footers/homeFooter";
import BuilderNavbar from "../../../components/navBars/builderNavbar";

import "../BuilderStyle.css";

const NamesDetail = () => {

//  ---------------------------------------   
const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
  
    // Setting a balance
    getbalance(account);
  };

// ==================================
  return (
    <>
      <div className="BuilderMain">
        <div className="container">
          {" "}
          <BuilderNavbar />
          {/* ----------------------------------------------------------------------------- */}
          <div>
            <p className="backIcon pt-4">
              <Link to='/Names' className="backIconLink">
                <BsFillArrowLeftCircleFill />
              </Link>
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <img src={DetailPic} alt="nameDetailPic" />
            </div>
            <div className="col-md-8">
              <p className="detailHeading">Claim a unique Name</p>
              <p className="detailText">
                {" "}
                Unique names can be assigned to your avatar for use as an alias,
                or they can be assigned to parcels.
              </p>
              <p className="detailText">
                Assigning a name to a parcel or estate allows you to create a
                unique URL, like https://name.dcl.eth, making it easy to send
                people to your LAND. When someone follows your new URL, they
                will be redirected to your LAND in{" "}
                <Link className="NamesLink">Our Game!</Link>
              </p>
              <p className="detailText">
                Names are only available in Ethereum, and can only be claimed
                with Ethereum MANA
                <br /> <img src={HexagonIcon} alt="hexagonIcon" />
              </p>{" "}
              <div>
                <div className="detaillabel">NAME</div>
                <input
                  className="detailInput pt-3"
                  placeholder="Your name goes here"
                  type="text"
                  range
                />
              </div>
              <p className="detaillabel pt-4">MANA APPROVED</p>
              <label class="switch">
                <input type="checkbox" onChange={btnhandler} />
                <span class="slider round"></span>
              </label>
              <p className="detaillabel pt-4">
                Authorize the <Link className="NamesLink">DCLController</Link>{" "}
                contract to operate MANA on your behalf
              </p>
              <div className="pb-5">
                <button className=" detailbtns">
                  <Link className="detailbtnsLink" to="/Names">
                    Cancel
                  </Link>
                </button>
                <button className=" detailbtntwo">
                  <Link className="detailbtnsLink">CLAIM 100</Link>
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------- */}
          <HomeFooter />
        </div>
      </div>
    </>
  );
};

export default NamesDetail;
