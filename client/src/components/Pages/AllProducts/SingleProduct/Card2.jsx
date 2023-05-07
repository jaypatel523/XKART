import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";
import { UserContext } from "../../../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";

const Card2 = ({ product }) => {
  const { user, setUser } = useContext(UserContext);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isYourProduct, setIsYourProduct] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user.userId) return;
    // console.log(product);
    if (user.userId === product.sellerId) {
      setIsYourProduct(true);
    }
  }, []);

  const addToWishlist = (product) => {
    let data = { userId: user.userId, productId: product._id };
    if (user.userId) {
      axios
        .post("/api/addtowishlist", data)
        .then((res) => {
          toast("product added to wishlist", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsWishlisted(true);
          console.log(res);
        })
        .catch((err) => console.log("error : ", err));
    } else {
      toast("You need to login first", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const removeFromWishlist = (product) => {
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
      return;
    }

    axios
      .patch("/api/deletefromwishlist/" + user.userId + "/" + product._id)
      .then((res) => {
        toast("product removed from wishlist", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(res);
        setIsWishlisted(res.data.isWishlisted);
        navigateTo("/wishlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!user.userId) {
      setIsWishlisted(false);
      return;
    }

    axios
      .get("/api/isProductWishlisted/" + user.userId + "/" + product._id)
      .then((res) => {
        // console.log("result", res);
        setIsWishlisted(res.data.isWishlisted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="p-4 mb-10 border bg-white rounded max-w-64 shadow-lg">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex justify-between mb-2 mr-2 text-base sm:text-3xl font-semibold">
              Rs {product.price}
            </div>
            {!(user.username === "Admin") && (
              <>
                {!isYourProduct && (
                  <>
                    {isWishlisted ? (
                      <>
                        <FaHeart
                          className="hover:cursor-pointer w-6 h-6"
                          onClick={() => removeFromWishlist(product)}
                        />
                      </>
                    ) : (
                      <>
                        <FaRegHeart
                          className="hover:cursor-pointer w-6 h-6"
                          onClick={() => addToWishlist(product)}
                        />
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <div>
            <div className="mb-4 text-base sm:text-lg">{product.title}</div>
          </div>
          <div className="flex justify-between ">
            <p className="text-sm md:text-base">
              {product.city}, {product.state}
            </p>
            <p className="text-sm md:text-base">{format(product?.created)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
