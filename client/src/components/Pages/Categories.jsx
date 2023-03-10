import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const Categories = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);

  return (
    <>
      <div className="p-4 mt-2 text-sm flex gap-3 justify-between overflow-x-scroll">
        <div>
          <div
            className="font-bold flex items-center p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => setIsAllOpen(!isAllOpen)}
          >
            All categories <SlArrowDown className="ml-2" />
          </div>
        </div>
        {isAllOpen && (
          <div className="absolute top-[135px] w-52 shadow-lg border border-gray-100">
            <div className="p-2 hover:bg-gray-200 cursor-pointer">Mobiles</div>
            <div className="p-2 cursor-pointer hover:bg-gray-200">Tvs</div>
            <div className="p-2 cursor-pointer hover:bg-gray-200">Laptops</div>
            <div className="p-2 cursor-pointer hover:bg-gray-200">Books</div>
            <div className="p-2 cursor-pointer hover:bg-gray-200">Cars</div>
            <div className="p-2 cursor-pointer hover:bg-gray-200">
              Motorcycles
            </div>
          </div>
        )}
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
