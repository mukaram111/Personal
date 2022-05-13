import React from "react";

import { Link } from "react-router-dom";
import {FaGreaterThan} from 'react-icons/fa'

import cardpic from "assets/background.png";

const MarketPlaceSecTwo = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <p className="sectionTwoTextBuilder">Newest Items</p>
        </div>
        <div>
          <Link className="builderViewMore">View all <FaGreaterThan/></Link>
        </div>
      </div>
      <div className="row background-card-invoices1 m-0 ">
        {/* {clientInvoiceData.quotations_rental_equipment_record?.map( */}
        {/* (items, index) => ( */}
        <div
          className="col"
          // key={index}
          style={{ cursor: "pointer" }}
          onClick={() => {
            // history.push({
            //     pathname: routes.CLIENT_ORDER_DETAIL,
            //   })
            //   dispatch(
            //     editClientInvoiceDetail({
            //       equipment_id: items.equipment_id,
            //       rdn_id: clientInvoiceData.rdn_edit_id,
            //     })
            //   );
          }}
        >
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

        {/* --------------------------Extra------------------------------------------------------ */}
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

        {/* ---------------------------------------------------- */}

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
        {/* ----------------------------------------- */}
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
        {/* ------------------------------------------- */}
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
        {/* ------------------------------------------------------------------------ */}
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

        {/* ---------------------------------------------------------------------------------------------- */}

        {/* ) */}
        {/* )} */}
      </div>
    </>
  );
};

export default MarketPlaceSecTwo;
