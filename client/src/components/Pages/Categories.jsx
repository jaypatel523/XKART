import React from "react";
import { SlArrowDown } from "react-icons/sl";

const Categories = () => {
  return (
    <>
      <div className="p-4 mt-2 text-sm flex gap-3 justify-between overflow-x-scroll">
        <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-200">
          <div className="mr-1 w-[95px] font-bold">All categories</div>
          <SlArrowDown />
        </div>
        <div className="p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          Mobiles
        </div>
        <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
          Tvs
        </div>
        <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
          Laptops
        </div>
        <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
          Books
        </div>
        <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
          Cars
        </div>
        <div className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
          Motorcycles
        </div>
      </div>
    </>
  );
};

export default Categories;
