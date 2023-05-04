import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistCard = ({ product, isLoading, setIsLoading, setIsRemoved }) => {
  const { user, setUser } = useContext(UserContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // console.log(user);
  const navigateTo = useNavigate();
  const handleProduct = () => {
    navigateTo(`/product/${product._id}`, {
      state: product,
    });
  };

  const removeFromWishlist = () => {
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
        setIsRemoved(true);
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
        console.log("result", res);
        setIsWishlisted(res.data.isWishlisted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isWishlisted]);

  return (
    <>
      {/* <div>hio</div> */}
      <div className="flex justify-center w-full b5:w-80 border border-gray-200 shadow-lg">
        <div className="block py-2 bg-white ">
          <img
            className="w-80 h-96 hover:cursor-pointer"
            src={product.image1}
            onClick={handleProduct}
            alt=""
          />

          <div></div>

          <div className="p-4">
            <div>
              <div className="flex justify-between mb-2 text-base sm:text-2xl font-semibold">
                Rs {product.price}
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
              </div>
            </div>

            <div>
              <div className="mb-4 text-base sm:text-lg">{product.title}</div>
            </div>

            <div className="flex justify-between ">
              <p className="text-sm md:text-base">
                {product.city}, {product.state}
              </p>
              <p className="text-sm md:text-base">4 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
