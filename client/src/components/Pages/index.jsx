import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default index;
