import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3"
import NavBar from "./Navbar";

const SingleProduct = () => {
  return (
    <>
      <NavBar />
      <div className=" h-[80vh] ">
        <div className="flex justify-center h-96 mt-10 flex-wrap">
          {/* image and details*/}

          <div className="w-[46rem] ml-8">
            <Card />
          </div>

          {/* price and seller */}
          <div className="h-96 w-96 ml-20 ">
            <Card2 />
            <div className="my-4"></div>
            <Card3 />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
