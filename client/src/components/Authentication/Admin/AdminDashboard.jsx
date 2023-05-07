import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Card from "../../Pages/AllProducts/Card";
import { UserContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import Product from "./product";

const AdminDashboard = () => {
  const [allProducts, setAllProducts] = useState();
  const { user, isAdmin } = useContext(UserContext);
  const navigateTo = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user) {
      navigateTo("/login");
    }
  }, []);

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

  return (
    <>
      <h1 className="text-3xl text-center mt-2">Admin Dashboard</h1>
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
              // console.log(product)
            })}
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
