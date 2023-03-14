import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="flex justify-center border border-gray-200 shadow-lg">
        <div className="block px-20 py-2 bg-white">
          <img 
            className="w-full h-[100]"
            src="../../../../assets/pic-laptop.jpg"
            alt=""
          />

          <div className="py-4">
            <h5 className="mb-2 text-xl font-semibold">Details</h5>

            <div>
              <p className="mb-2">
                Brand
                <span className="ml-20">HP</span>
              </p>
            </div>
            <hr />
            <hr />
            <h5 className=" mt-2 mb-2 text-xl font-semibold">Description</h5>
            <p className="mb-4 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa vel
              facere, at fugiat, vero in ducimus aut expedita iure aliquid hic
              dolorem sed optio, dicta debitis voluptate. Commodi sit quidem
              nobis soluta, aperiam voluptatibus velit quibusdam dicta eum hic
              molestiae?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
