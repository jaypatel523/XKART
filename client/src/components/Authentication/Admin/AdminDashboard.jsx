import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Card from "../../Pages/AllProducts/Card";
import { UserContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import Product from "./product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [allProducts, setAllProducts] = useState();
  const { user, isAdmin, setIsAdmin, setUser, setIsLogin } =
    useContext(UserContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    axios
      .get("/api/getAllProducts")
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const handleLogout = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        setUser({ userId: "", username: "", email: "" });
        setIsLogin(false);
        setIsAdmin(false);
        toast("Logout successfully", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigateTo("/");
        // alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-center m-2">Admin Dashboard</h1>
        <h1
          className="bg-blue-500 text-white hover:bg-blue-700 p-2 text-center m-2 rounded cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </h1>
      </div>
      <section className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
          {allProducts &&
            allProducts.map((product, index) => {
              if (
                product.adminApproved === false &&
                product.adminRejected === false
              ) {
                return <Product key={index} product={product} />;
              }
            })}
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
