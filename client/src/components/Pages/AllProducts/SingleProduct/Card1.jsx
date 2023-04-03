import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

const Card1 = ({ product }) => {
  let allImages = [product?.image1, product?.image2, product?.image3];
  const [imageIoShow, setImageIoShow] = useState("");

  console.log(allImages);
  return (
    <>
      <div className="flex flex-col rounded justify-center border border-gray-200 shadow-lg">
        <div className="flex justify-center items-center">
          <img
            className="w-[500px] h-[500px]"
            src={imageIoShow || product.image1}
            alt=""
          />
        </div>

        <div className="px-4 flex justify-start gap-4 mt-4">
          <img
            src={product.image1}
            alt=""
            className="w-12 h-12 cursor-pointer"
            onClick={() => setImageIoShow(product.image1)}
          />
          <img
            src={product.image2}
            alt=""
            className="w-12 h-12 cursor-pointer"
            onClick={() => setImageIoShow(product.image2)}
          />
          <img
            src={product.image3}
            alt=""
            className="w-12 h-12 cursor-pointer"
            onClick={() => setImageIoShow(product.image3)}
          />
        </div>
        <div className="block px-4 py-2 bg-white">
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
