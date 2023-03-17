import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Products from "./AllProducts/Products";
import Search from "./Search";
import { UserContext } from "../../Context";
import Login from "../Authentication/Login";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsOpen(!isOpen);
  //   }, 5000);
  // }, []);

  

  return (
    <>
      <div className="">
        <Categories />
        <Search />
        <Products />
        <div className="">
          {isOpen && (
            <div className="h-[600px] w-full bg-opacity-40 backdrop-blur-sm absolute top-0 left-0 mt-2 bg-white rounded-md shadow-lg">
              <Login />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
