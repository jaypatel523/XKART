import React from "react";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

const Card = () => {
  return (
    <>
      <div className="border border-gray-200 shadow-lg">
        <div className="">
          <div className="p-4">
            <div>
              <div className="flex mb-2 justify-between text-xl font-semibold cursor-pointer">
                <div className="flex justify-between">
                  <VscAccount className="w-12 h-12" />
                  <div className="my-auto ml-2">Mungerilal</div>
                </div>
                <IoIosArrowForward className="my-auto" />
              </div>
            </div>
            <div>
              <div className="cursor-pointer text-center mb-2 py-3 text-2xl bg-blue-500 text-white rounded-lg">
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
