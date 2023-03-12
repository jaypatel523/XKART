import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const SingleProduct = () => {
  return (
    <>
      <div className="m-10">
        <div className="block md:flex justify-around">
          {/* image and details*/}
          <div className="mr-4 mb-10 md:w-[70%]">
            <Card1 />
          </div>

          {/* price and seller */}
          <div className="">
            <Card2 />
            <Card3 />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
