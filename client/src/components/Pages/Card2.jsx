import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="block bg-white shadow-md dark:bg-neutral-700 w-full">
          <div className="p-6">
            <div>
              <div className="flex justify-between mb-2 text-3xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 ">
                Rs 25,000
                <FaRegHeart className="my-auto" />
              </div>
            </div>
            <div>
              <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
                Some quick example text to build
              </p>
            </div>
            <div className="flex justify-between ">
              <p className="text-base  text-neutral-600 dark:text-neutral-200">
                Surat, Gujarat
              </p>
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                4 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
