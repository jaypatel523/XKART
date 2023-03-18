import axios from "axios";
import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxHeartFilled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ product }) => {
  const { user, setUser } = useContext(UserContext);
  // console.log(product);

  const navigateTo = useNavigate();
  const handleProduct = () => {
    navigateTo(`/${product.productId}`, {
      state: product,
    });
  };

  const removeWishlist = (product) => {
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

  return (
    <>
      <div className="flex justify-center border border-gray-200 shadow-lg">
        <div className="block max-w-xs py-2 bg-white ">
          <img
            className="w-80 h-44 hover:cursor-pointer"
            src={product.product.image3}
            onClick={handleProduct}
            alt=""
          />

          <div className="p-4">
            <div>
              <div className="flex justify-between mb-2 text-base sm:text-2xl font-semibold">
                Rs {product.product.price}
                <RxHeartFilled
                  className="hover:cursor-pointer"
                  onClick={() => removeWishlist(product.product)}
                />
              </div>
            </div>
            <div>
              <div className="mb-4 text-base sm:text-lg">
                {product.product.title}
              </div>
            </div>
            <div className="flex justify-between ">
              <p className="text-sm md:text-base">
                {product.product.city}, {product.product.state}
              </p>
              <p className="text-sm md:text-base">4 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
