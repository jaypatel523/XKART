import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

const index = () => {
  return (
    <div className="h-screen bg-gray-200">
      <Navbar />
      <Categories />
      <Outlet />
    </div>
  );
};

export default index;
