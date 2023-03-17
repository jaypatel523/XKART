import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Products from "./AllProducts/Products";
import Search from "./Search";
import { UserContext } from "../../Context";
import Login from "../Authentication/Login";

const Home = () => {

  return (
    <>
      <div className="">
        <Categories />
        <Search />
        <Products />
      </div>
    </>
  );
};

export default Home;
