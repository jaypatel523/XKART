import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="block bg-white shadow-md dark:bg-neutral-700">
          <img
            className="w-full h-[27rem] "
            src="../../../assets/pic-laptop.jpg"
            alt=""
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
              Details
            </h5>

            <div>
              <p className="mb-2">
                Brand
                <span className="ml-20">HP</span>
              </p>
            </div>
            <hr />
            <hr />
            <h5 className=" mt-2 mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
              Description
            </h5>
            <p className=" mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa vel facere, at fugiat, vero in ducimus aut expedita iure aliquid hic dolorem sed optio, dicta debitis voluptate. Commodi sit quidem nobis soluta, aperiam voluptatibus velit quibusdam dicta eum hic molestiae?
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
