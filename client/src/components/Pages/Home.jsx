import React from "react";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Products from "./Products";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Categories />
        <Search />
        <Products />
      </div>
    </>
  );
};

export default Home;
