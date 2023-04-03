import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Card2 = ({ product }) => {
  return (
    <>
      <div className="p-4 mb-10 border border-gray-200 rounded max-w-64">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex justify-between mb-2 mr-2 text-base sm:text-3xl font-semibold">
              Rs {product.price}
            </div>
            <FaRegHeart className="w-8 h-8" />
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
    </>
  );
};

export default Card2;
