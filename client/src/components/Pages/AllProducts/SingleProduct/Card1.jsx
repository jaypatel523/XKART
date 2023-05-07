import React, { useEffect, useState } from "react";


import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const Card1 = ({ product }) => {
  const allImages = [
    <div className="bg-black flex justify-center">
      <img src={product?.image1} className="h-96" />
    </div>,
    <div className="bg-black flex justify-center">
      <img src={product?.image2} className="h-96" />
    </div>,
    <div className="bg-black flex justify-center">
      <img src={product?.image3} className="h-96" />
    </div>,
  ];

  return (
    <>

      <div className="flex flex-col p-2 justify-center rounded-lg border bg-white border-gray-200 shadow-lg">
        <AliceCarousel
          mouseTracking
          items={allImages}
          autoPlay="true"
          autoPlayInterval={2000}
          infinite="true"
          disableButtonsControls="true"
        />
        <div className="block px-4 py-2">

          <div className="py-4">
            <h5 className="mb-2 text-xl text-whatsapp font-semibold">Details</h5>
            <div>
              <p className="mb-2">
                Brand
                <span className="ml-20">{product.brand}</span>
              </p>
            </div>
            <hr />
            <hr />
            <h5 className=" mt-2 mb-2 text-xl text font-semibold">Description</h5>
            <p className="mb-4 text-base">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
