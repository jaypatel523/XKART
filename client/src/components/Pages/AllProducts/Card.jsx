import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ product }) => {

  const { user, setUser } = useContext(UserContext);
  const [wishlistProducts, setWishlistProducts] = useState([]);


  // console.log(user);
  const navigateTo = useNavigate();
  const handleProduct = () => {
    navigateTo(`/product/${product._id}`, {
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
          console.log("result", res);
          console.log("product", product);
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


  const removeFromWishlist = () => {
    axios
      .patch("/deletefromwishlist/:userId/:productId")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle wishlist
  // useEffect(() => {
  //   // console.log(product);
  //   axios
  //     .get("/api/getallwishlist/" + user.userId + "/" + product._id)
  //     .then((res) => {
  //       // setWishlistProducts(res.data.products.wishlist);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


  return (
    <>
      {/* <div>hio</div> */}
      <div className="flex justify-center w-full b5:w-80 border border-gray-200 shadow-lg">
        <div className="block py-2 bg-white ">
          <img
            className="w-full hover:cursor-pointer"
            src={product.image1}
            onClick={handleProduct}
            alt=""
          />

          <div></div>

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
