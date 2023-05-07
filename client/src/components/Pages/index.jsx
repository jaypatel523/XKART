import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Footer from "./Footer";

const index = () => {
  return (
    <div className="">
      <Navbar />
      <Categories />
      <Outlet />
      <Footer />
    </div>
  );
};

export default index;
