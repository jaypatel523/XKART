import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsChatDots, BsCartPlus } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = useNavigate();
  const handleMenu = () => {
    navigateTo("/menu");
  };
  
  
  return (
    <>
      <div className="drop-shadow-sm shadow-md w-auto px-4 flex justify-between items-center">
        <div className="py-4 flex items-center">
          <div className="mr-4">XKART</div>
          <div className="mr-4">
            <button className="border border-black  py-2 px-4 hidden md:flex justify-between items-center rounded-lg">
              <span>Location</span>
              <TiArrowSortedDown />
            </button>
          </div>
          <form className="hidden md:flex items-center">
            <div>
              <input
                type="text"
                className="p-2 border border-black rounded-lg  focus:outline-none"
                placeholder="search any product..."
              />
            </div>
          </form>
        </div>
        <div className="hidden md:flex justify-between items-center">
          <Link to="/chat" className="p-2">
            <BsChatDots className="w-6 h-6" />
          </Link>
          <Link to="/chat" className="p-2">
            <IoMdNotificationsOutline className="w-6 h-6" />
          </Link>
          <Link to="/wishlist" className="p-2">
            <BsCartPlus className="w-6 h-6" />
          </Link>
          <Link to="/login" className="p-2">
            <VscAccount className="w-6 h-6" />
          </Link>
          <Link
            to="/sell"
            className="bg-blue-500 text-white rounded-lg px-10 py-2"
          >
            sell
          </Link>
        </div>
        <div className="md:hidden">
          <FiMenu className="w-6 h-6" onClick={handleMenu} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
