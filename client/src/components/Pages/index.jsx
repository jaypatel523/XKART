import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { UserContext } from "../../Context";
import axios from "axios";
import Products from "./AllProducts/Products";

const index = () => {
  const { user, isAdmin, setIsAdmin } = useContext(UserContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user.userId) {
      navigateTo("/");
      return;
    }

    // axios.get("/api/getuserdetails/" + user.userId).then((res) => {
    //   console.log(res);
    //   if (res.data.user?.isAdmin) {
    //     setIsAdmin(true);
    //     navigateTo("/admindashboard");
    //     return;
    //   }
    //   setIsAdmin(false);
    // });
  }, []);

  return (
    <div className="">
      <>
        <Navbar />
        <Categories />
        <Products />
        {/* <Outlet /> */}
        <Footer />
      </>
    </div>
  );
};

export default index;
