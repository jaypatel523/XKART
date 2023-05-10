import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishlistCard from "./WishlistCard";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isRemoved, setIsRemoved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user.userId) {
      toast("You need to login first", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigateTo("/");
      return;
    }
  }, []);

  useEffect(() => {
    if (!user.userId) {
      return;
    }

    setIsLoading(true);
    axios.get(`/api/getallwishlist/${user.userId}`).then((res) => {
      console.log(res);
      setIsLoading(false);
      if (res.data.success) {
        setWishlist(res.data.products);
      } else {
        toast(res.data.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }, [isRemoved]);

  return (
    <>
      <section className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
          {wishlist.length > 0 && (
            <>
              {wishlist.map((product, index) => {
                if (product.adminApproved === true) {
                  return (
                    <WishlistCard
                      key={index}
                      product={product}
                      setIsRemoved={setIsRemoved}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  );
                }
              })}
            </>
          )}
        </div>
      </section>
      {isLoading && (
        <>
          <div className="flex justify-center items-center">
            <ReactLoading type="balls" color="#164e63" width="200px" />
          </div>
        </>
      )}
      {!isLoading && wishlist.length == 0 && (
        <>
          <h1 className="flex mb-64 justify-center items-center text-4xl text-gray-400">
            Wishlist is empty
          </h1>
        </>
      )}
    </>
  );
};

export default Wishlist;
