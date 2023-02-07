import React from "react";
import { BsFillChatDotsFill, BsSuitHeartFill, BsSearch } from "react-icons/bs";
import "../index.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <Link to="/" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  X
                </span>
                KART
              </h1>
            </Link>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div
                  className="input-group-append"
                  style={{ cursor: "pointer" }}
                >
                  <span className="input-group-text bg-transparent text-primary">
                    <BsSearch />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-lg-3 col-6 text-right"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link
              to="/sell"
              style={{
                border: "1px solid black",
                background: "grey",
                color: "white",
                marginRight: "1rem",
                borderRadius: "10%",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
              className="btn"
            >
              Sell
            </Link>

            {/* Link from react router dom */}
            <Link
              to="/chat"
              className="btn border"
              style={{ marginRight: "1rem" }}
            >
              <BsFillChatDotsFill style={{ fontSize: "1.5rem" }} />
            </Link>

            <Link
              to="/wishlist"
              className="btn border"
              style={{ marginRight: "1rem" }}
            >
              <BsSuitHeartFill style={{ fontSize: "1.5rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
