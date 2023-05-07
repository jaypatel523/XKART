import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const { user, setUser, isAdmin } = useContext(UserContext);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isYourProduct, setIsYourProduct] = useState(false);

  console.log(user);
  const navigateTo = useNavigate();
  const handleProduct = () => {
    navigateTo(`/product/${product._id}`, {
      state: product,
    });
  };

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
  }, [user]);

  useEffect(() => {
    if (!user.userId) return;
    // console.log(product);
    if (user.userId === product.sellerId) {
      setIsYourProduct(true);
    }
  }, []);

  // console.log(product);

  return (
    <>
      <div className="flex justify-center bg-white rounded w-full b5:w-80 border border-gray-200 shadow-lg">
        <div className="block">
          <img
            className="w-80 h-96 hover:cursor-pointer"
            src={product.image1}
            onClick={handleProduct}
            alt=""
          />

          <div></div>

          <div className="p-4">
            {!(user.username === "Admin") && (
              <div>
                <div className="flex justify-between mb-2 text-base sm:text-2xl font-semibold">
                  Rs {product.price}
                  {!isYourProduct && (
                    <>
                      {isWishlisted ? (
                        <>
                          <FaHeart
                            className="hover:cursor-pointer"
                            onClick={() => removeFromWishlist(product)}
                          />
                        </>
                      ) : (
                        <>
                          <FaRegHeart
                            className="hover:cursor-pointer"
                            onClick={() => addToWishlist(product)}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

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
      </div>
    </>
  );
};

export default Product;
