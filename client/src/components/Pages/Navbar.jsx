import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsChatDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";
import { UserContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser, isLogin, setIsLogin } = useContext(UserContext);

  const navigateTo = useNavigate();
  const handleMenu = () => {
    navigateTo("/menu");
  };

  const handleLogout = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        setUser({ userId: "", username: "", email: "" });
        setIsLogin(false);
        toast("Logout successfully", {
          position: "top-center",
          autoClose: 1500,
        });
        // alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
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
          <Link to="/chat" className="p-2 relative" title="Chat">
            <BsChatDots className="w-6 h-6" />
          </Link>
          <Link to="/chat" className="p-2" title="Notification">
            <IoMdNotificationsOutline className="w-6 h-6" />
          </Link>
          <Link to="/wishlist" className="p-2" title="Wishlist">
            <FaRegHeart className="w-6 h-6" />
          </Link>

          {isLogin && (
            <>
              <Link to="/profile" className="p-2">
                <VscAccount className="w-6 h-6" title="Profile" />
              </Link>
            </>
          )}

          {isLogin ? (
            <>
              <button onClick={handleLogout} className="p-2">
                <AiOutlineLogout className="w-6 h-6" title="Logout" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="p-2">
                <AiOutlineLogout className="w-6 h-6" title="Login" />
              </Link>
            </>
          )}

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
