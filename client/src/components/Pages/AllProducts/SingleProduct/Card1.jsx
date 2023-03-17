import React from "react";

const Card1 = ({ product }) => {
  return (
    <>
      <div className="flex justify-center border border-gray-200 shadow-lg">
        <div className="block px-4 b5:px-10 py-2 bg-white">
          <img className="w-full " src={product.image3} alt="" />

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
