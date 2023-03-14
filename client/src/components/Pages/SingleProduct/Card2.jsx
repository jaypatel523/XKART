import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="p-4 mb-10 border border-gray-200 md:max-w-md">
        <div className="p-4">
          <div>
            <div className="flex justify-between mb-2 text-base sm:text-3xl font-semibold">
              Rs 25,000
              <FaRegHeart />
            </div>
          </div>
          <div>
            <div className="mb-4 text-base sm:text-lg">
              Some quick example text to build
            </div>
          </div>
          <div className="flex justify-between ">
            <p className="text-sm md:text-base">Surat, Gujarat</p>
            <p className="text-sm md:text-base">4 days ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
