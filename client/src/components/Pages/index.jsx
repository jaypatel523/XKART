import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

const index = () => {
  return (
    <div className="">
      <Navbar />
      <Categories />
      <Outlet />
    </div>
  );
};

export default index;
