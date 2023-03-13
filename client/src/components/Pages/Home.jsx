import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Products from "./AllProducts/Products";
import Search from "./Search";

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
