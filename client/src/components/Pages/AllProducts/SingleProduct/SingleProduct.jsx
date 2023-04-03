import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();

  return (
    <>
      <div className="m-10">
        <div className="block md:flex justify-evenly">
          <div className="mb-10 w-full md:w-[700px] md:mr-4">
            <Card1 product={location.state} />
          </div>

          <div className="b5:min-w-[250px]">
            <Card2 product={location.state} />
            <Card3 product={location.state} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
