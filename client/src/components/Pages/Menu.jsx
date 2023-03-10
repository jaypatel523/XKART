import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Menu = () => {
  const navigateTo = useNavigate();
  const handleMenu = () => {
    navigateTo("/");
  };
  return (
    <>
      <div className="px-4 drop-shadow-sm shadow-lg flex justify-between items-center">
        <div className="py-2 flex items-center">
          <div className="mr-4">XKART</div>
          <div className="mr-4">
            <button className="border border-black  py-2 px-4 flex justify-between items-center rounded-lg">
              <span>Location</span>
              <TiArrowSortedDown />
            </button>
          </div>
        </div>
        <div className="">
          <AiOutlineClose className="w-6 h-6" onClick={handleMenu} />
        </div>
      </div>
    </>
  );
};

export default Menu;
