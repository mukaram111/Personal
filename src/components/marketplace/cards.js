import React from "react";

import cardpic from "assets/background.png";

const Cards = () => {
  return (
    <>
      <div className="col" style={{ cursor: "pointer" }}>
        <div className="col-sm-12 background-card-invoices ">
          <div
            className="row "
            style={{
              position: "relative",
              width: "250px",
              height: "200px",
            }}
          >
            <div className="col-sm-12 ">
              <img
                src={cardpic}
                alt="pic"
                className="img-fluid"
                style={{
                  width: "250px",
                  height: "200px",
                  borderRadius: "20px",
                  position: "absolute",
                }}
              />
            </div>
            <div
              className="col-sm-12 "
              style={{
                alignItems: "end",
                display: "flex",
                marginBottom: "4%",
              }}
            >
              <div>
                <p className="cardTextHead">Architecture</p>
                <p className="cardTextSub">16x16m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
