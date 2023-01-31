import React, { useEffect, useState } from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCat, setIsCat] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCat = () => {
    setIsCat(!isCat);
    if (!isCat) {
      setIsOpen(false);
    }
  };

  const handleHamBurger = () => {
    if (window.innerWidth <= 991) {
      setIsHamOpen(!isHamOpen);
      if (!isCat) {
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <div
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              style={{
                height: "65px",
                marginTop: "-1px",
                padding: "0 30px",
                transition: "all 2s",
              }}
              onClick={handleCat}
            >
              <h6 className="m-0">Categories</h6>
            </div>

            {isCat ? (
              <>
                <nav
                  className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                  id="navbar-vertical"
                >
                  <div
                    className="navbar-nav w-100 overflow-hidden"
                    style={{ height: "410px" }}
                  >
                    <div
                      className="nav-item dropdown"
                      onMouseOver={() => setIsOpen(true)}
                      onMouseOut={() => setIsOpen(false)}
                    >
                      <div
                        href="#"
                        className="nav-link dropdown"
                        data-toggle="dropdown"
                      >
                        {/* here we have to provide linke for specific category */}
                        Dresses
                      </div>

                      {isOpen ? (
                        <>
                          <div className="position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                            <a href="" className="dropdown-item">
                              Men's Dresses
                            </a>
                            <a href="" className="dropdown-item">
                              Women's Dresses
                            </a>
                            <a href="" className="dropdown-item">
                              Baby's Dresses
                            </a>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <a href="" className="nav-item nav-link">
                      Shirts
                    </a>
                    <a href="" className="nav-item nav-link">
                      Jeans
                    </a>
                    <a href="" className="nav-item nav-link">
                      Swimwear
                    </a>
                    <a href="" className="nav-item nav-link">
                      Sleepwear
                    </a>
                    <a href="" className="nav-item nav-link">
                      Sportswear
                    </a>
                    <a href="" className="nav-item nav-link">
                      Jumpsuits
                    </a>
                    <a href="" className="nav-item nav-link">
                      Blazers
                    </a>
                    <a href="" className="nav-item nav-link">
                      Jackets
                    </a>
                    <a href="" className="nav-item nav-link">
                      Shoes
                    </a>
                  </div>
                </nav>
              </>
            ) : (
              <> </>
            )}
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    X
                  </span>
                  KART
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                onClick={handleHamBurger}
                onResize={() => {
                  if (window.innerWidth >= 900) {
                    setIsHamOpen(true);
                  }
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {isHamOpen ? (
                <>
                  <div
                    className="navbar-collapse justify-content-between"
                    id="navbarCollapse"
                  >
                    {/* Here we will add navigation tabs and according routes */}
                    {/* for now i keep this anchor tag */}
                    <div className="navbar-nav mr-auto py-0">
                      <a href="index.html" className="nav-item nav-link active">
                        Home
                      </a>
                      <a href="shop.html" className="nav-item nav-link">
                        Shop
                      </a>
                      <a href="detail.html" className="nav-item nav-link">
                        Shop Detail
                      </a>
                      <div className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Pages
                        </a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <a href="cart.html" className="dropdown-item">
                            Shopping Cart
                          </a>
                          <a href="checkout.html" className="dropdown-item">
                            Checkout
                          </a>
                        </div>
                      </div>
                      <a href="contact.html" className="nav-item nav-link">
                        Contact
                      </a>
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                      <Link to="/login" className="nav-item nav-link">
                        Login
                      </Link>
                      <Link to="/register" className="nav-item nav-link">
                        Login
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
