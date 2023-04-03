import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context";
import Card from "./Card";
import ReactLoading from "react-loading";
import Categories from "../Categories";

const Products = ({ type, color }) => {
  const [allProducts, setAllProducts] = useState([]);
  const { user } = useContext(UserContext);
  const [categoryWiseProduct, setCategoryWiseProduct] = useState([]);
  const params = useParams();

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

  useEffect(() => {
    if (Object.keys(params).length == 0) return;

    axios
      .get("/api/getProductCategorywise/" + params.category)
      .then((res) => {
        setCategoryWiseProduct(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.category]);

  return (
    <>
      <section className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
          {params?.category ? (
            <>
              {categoryWiseProduct &&
                categoryWiseProduct.map((product, index) => {
                  return <Card key={index} product={product} />;
                })}
            </>
          ) : (
            <>
              {allProducts &&
                allProducts.map((product, index) => {
                  return <Card key={index} product={product} />;
                })}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
