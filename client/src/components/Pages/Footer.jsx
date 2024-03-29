import React, { useContext } from "react";
import { UserContext } from "../../Context";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {!(user.username === "Admin") && (
        <>
          <footer className="relative bg-gray-200 pt-8 pb-6 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                  <h4 className="text-3xl fonat-semibold text-gray-700">
                    Let's keep in touch!
                  </h4>
                  <h5 className="text-lg mt-0 mb-2 text-gray-600">
                    Find us on any of these platforms, we respond 1-2 business
                    days.
                  </h5>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                      <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                        Useful Links
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            About Us
                          </div>
                        </li>
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            Blog
                          </div>
                        </li>
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            Github
                          </div>
                        </li>
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            Free Products
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                        Other Resources
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            MIT License
                          </div>
                        </li>
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            Terms &amp; Conditions
                          </div>
                        </li>
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            Privacy Policy
                          </div>
                        </li>
                        <li>
                          <div className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm">
                            Contact Us
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-300" />
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                  <div className="text-sm text-gray-500 font-semibold py-1">
                    Copyright © <span id="get-current-year">2023-Present</span>{" "}
                    XKART.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Footer;
