import React from "react";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

const Card = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="block bg-white shadow-md dark:bg-neutral-700 w-full">
          <div className="p-6">
            <div>
              <div className="flex mb-2 text-3xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 ">
                <VscAccount className="w-12 h-12" />
                <div className="flex justify-between w-full ">
                  <div className="my-auto ml-2">Mungerilal</div>
                  <IoIosArrowForward className="my-auto"/>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" text-center mb-2 py-3 text-2xl text-neutral-600 dark:text-neutral-200 border border-black ">
                Chat with seller
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
