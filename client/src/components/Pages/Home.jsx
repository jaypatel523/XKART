import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Search from "./Search";
import { UserContext } from "../../Context";
import Login from "../Authentication/Login";
import Products from "./AllProducts/Products";

const Home = () => {
  return (
    <>
      <div className="">
        <Products />
      </div>
    </>
  );
};

export default Home;
