import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Slider.css";

const Card1 = ({ product }) => {
  let allImages = [product?.image1, product?.image2, product?.image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  setTimeout(() => {
    const newIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(() => newIndex);
  }, 3500);

  const handlePrevClick = () => {
    const newIndex =
      (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className="flex flex-col p-2 justify-center rounded-lg border bg-white border-gray-200 shadow-lg">
        <div className="slider-container">
          <div className="slider bg-black border border-black">
            {allImages.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`b5:px-20 slide ${
                  index === currentImageIndex ? "active" : ""
                } ${
                  index > currentImageIndex
                    ? "next"
                    : index < currentImageIndex
                    ? "prev"
                    : ""
                }`}
              />
            ))}
          </div>
          <div className="">
            <button
              className="bg-white rounded-full p-1 absolute top-1/2 left-2"
              onClick={handlePrevClick}
            >
              {/* Prev */}
              <GrPrevious className="h-6 w-6 text-white" />
            </button>
            <button
              className="bg-white rounded-full p-1 absolute top-1/2 right-2"
              onClick={handleNextClick}
            >
              <GrNext className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        <div className="block px-4 py-2">
          <div className="py-4">
            <h5 className="mb-2 text-xl font-semibold">Details</h5>
            <div>
              <p className="mb-2">
                Brand
                <span className="ml-20">{product.brand}</span>
              </p>
            </div>
            <hr />
            <hr />
            <h5 className=" mt-2 mb-2 text-xl font-semibold">Description</h5>
            <p className="mb-4 text-base">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
