import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsChatDots, BsCartPlus, BsCartDash } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

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

      <div className="my-10">
        <div className="flex justify-between p-4 hover:bg-gray-300 ease-in-out duration-200">
          <span>Chat</span>
          <BsChatDots className="w-6 h-6" />
        </div>
        <div className="flex justify-between p-4 hover:bg-gray-300 ease-in-out duration-200">
          <span>Notification</span>
          <IoMdNotificationsOutline className="w-6 h-6" />
        </div>
        <div className="flex justify-between p-4 hover:bg-gray-300 ease-in-out duration-200">
          <span>Wish list</span>
          <BsCartPlus className="w-6 h-6" />
        </div>
        <div className="flex justify-between p-4 hover:bg-gray-300 ease-in-out duration-200">
          <span>Profile</span>
          <VscAccount className="w-6 h-6" />
        </div>
        <div className="flex justify-between p-4 hover:bg-gray-300 ease-in-out duration-200">
          <span>Sell</span>
          <BsCartDash className="w-6 h-6" />
        </div>
        <div className="flex justify-between p-4 hover:bg-gray-300 ease-in-out duration-200">
          <span>Login/Register or Logout</span>
          <AiOutlineLogout className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};

export default Menu;
