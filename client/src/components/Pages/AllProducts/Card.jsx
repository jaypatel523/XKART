import axios from "axios";
import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ product }) => {
  const { user } = useContext(UserContext);

  const navigateTo = useNavigate();
  const handleProduct = () => {
    navigateTo(`/${product.productId}`, {
      state: product,
    });
  };

  const handleWishlist = (product) => {
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
            src={product.image3}
            onClick={handleProduct}
            alt=""
          />

          <div className="p-4">
            <div>
              <div className="flex justify-between mb-2 text-base sm:text-2xl font-semibold">
                Rs {product.price}
                <FaRegHeart
                  className="hover:cursor-pointer"
                  onClick={() => handleWishlist(product)}
                />
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

export default Card;
