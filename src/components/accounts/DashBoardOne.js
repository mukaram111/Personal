import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { GiDividedSquare } from "react-icons/gi";
import { GiWatermelon } from "react-icons/gi";

import AccountNavbar from "../../components/navBars/accountNavbar";
import AvatarPic from "../../assets/images/avatarpic.jpg";

import "./style.css";
import HomeFooter from "../../components/footers/homeFooter";

const DashBoardOne = () => {
  return (
    <>
      <AccountNavbar />
      <div className="container pb-5">
        <div className="row bgColorPurple">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2">
                {/* <img src={AvatarPic} className=" avatarPic" alt="avatar" /> */}
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 80, height: 80 }}
                />
              </div>
              <div className="col-md-10">
                <p className="clientName mb-0">Kliyarac</p>
                <p className="descript">Click here to set a description...</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 centerBtn">
            <button className="clientbtn">CHANGE ALIAS</button>
            <button className="clientbtn">EDIT AVATAR</button>
          </div>
        </div>
        <div className="row pt-4">
        <div className="col-md-6 p-2 ">
            <div className="clientCardMain">
              <div className=" d-flex p-2 justify-content-between">
                <p className="clientname pt-2">Ethereum MANA</p>
                <p className="dots">...</p>
              </div>
              <div className="p-2  d-flex justify-content-between">
                <p className=" numberIcon">
                  <span>
                    <GiDividedSquare style={{color:'red'}}/>
                  </span>{" "}
                 <span className="" style={{fontWeight:'500'}}> 0</span>
                </p>
                <p className="pt-3">
                  <button className='clientCardBtn'>BUY</button>
                  <button  className='clientCardBtn'>SWAP</button>
                </p>
              </div>
           
            <hr />
            <div className="">
              <p className="text-center watermelon mb-0">
                <GiWatermelon />
              </p>
              <p className="text-center">You have no transactions yet.</p>
            </div>
          </div>
          </div>
          {/* --------------------------------------- */}
          <div className="col-md-6 p-2 ">
            <div className="clientCardMain">
              <div className=" d-flex p-2 justify-content-between">
                <p className="clientname pt-2">Polygon MANA</p>
                <p className="dots">...</p>
              </div>
              <div className="p-2  d-flex justify-content-between">
                <p className=" numberIcon">
                  <span>
                    <GiDividedSquare />
                  </span>{" "}
                 <span className="" style={{fontWeight:'500'}}> 0</span>
                </p>
                <p className="pt-3">
                  <button className='clientCardBtn'>BUY</button>
                  <button  className='clientCardBtn'>SWAP</button>
                </p>
              </div>
           
            <hr />
            <div className="">
              <p className="text-center watermelon mb-0">
                <GiWatermelon />
              </p>
              <p className="text-center">You have no transactions yet.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <HomeFooter/>
    </>
  );
};

export default DashBoardOne;
