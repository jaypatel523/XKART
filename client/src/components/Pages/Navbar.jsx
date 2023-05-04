import React, { useContext, useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsChatDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import axios from "axios";
import { UserContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "timeago.js";

const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [Location, setLocation] = useState("Location");
  const { user, setUser, isLogin, setIsLogin, socket } =
    useContext(UserContext);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [temp, settemp] = useState(false);

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
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  };

  useEffect(() => {
    if (!user.userId) {
      return;
    }

    socket.current.on("getMessage", (data) => {
      setIsNotificationOpen(true);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
      console.log("hi");
      setNotifications((prev) => [arrivalMessage, ...prev]);
    });
  }, []);

  // const handleProfile = () => {};
  const handleNotificationOpen = () => {
    setIsNotificationOpen(false);
    navigateTo("/chat");
  };

  const handleProfile = () => {
    navigateTo("/profile");
  };

  return (
    <div className="bg-gray-200">
      <div className="drop-shadow-sm p-2 py-4 shadow-md w-auto px-4 flex justify-between items-center">
        <div className=" flex items-center text-center">
          <div
            className="px-8 mr-10 text-xl flex cursor-pointer bg-whatsapp text-white p-2 rounded"
            onClick={() => navigateTo("/")}
          >
            <div className="text-3xl ">X</div>
            <div className="text-xl pt-1 ml-1">KART</div>
          </div>
          {/* <div className="flex flex-col my-4">
            <div
              className="relative flex items-center justify-between  bg-white border border-gray-200 rounded-md cursor-pointer"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
            >
              <input
                className="p-2 focus:outline-none cursor-pointer"
                value={Location}
                readOnly
              />
              <div className="p-2">
                <SlArrowDown />
              </div>
              {isLocationOpen && (
                <>
                  <div className="absolute top-10 text-start left-0 w-[100%] h-32 border border-gray-200 bg-gray-50 overflow-scroll">
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={(e) => setLocation("Bayad")}
                    >
                      Bayad
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={(e) => setLocation("Surat")}
                    >
                      Surat
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={(e) => setLocation("Anand")}
                    >
                      Anand
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={(e) => setLocation("Vadodara")}
                    >
                      Vadodara
                    </div>
                  </div>
                </>
              )}
            </div>
          </div> */}
          {/* <div className="mr-4">
            <button className="border border-black  py-2 px-4 hidden md:flex justify-between items-center rounded-lg">
              <span>Location</span>
              <TiArrowSortedDown />
            </button>
          </div> */}
          {/* <form className="hidden md:flex items-center">
            <div>
              <input
                type="text"
                className="p-2 border border-black rounded-lg  focus:outline-none"
                placeholder="search any product..."
              />
            </div>
          </form> */}
        </div>
        <div className="hidden md:flex justify-between items-center">
          <Link
            to="/chat"
            className="py-2 px-4  text-center relative hover:bg-whatsapp hover:text-white rounded-lg"
            title="Chat"
          >
            <BsChatDots className="w-6 h-6" />
            {/* Chat */}
          </Link>
          {/* <button
            onClick={handleNotificationOpen}
            className="py-2 px-4 relative text-center hover:bg-blue-500 hover:text-white rounded-lg"
          >
            <div>
              <IoMdNotificationsOutline className="w-6 h-6" />
            </div>
            {isNotificationOpen && (
              <>
                <div className="bg-red-600 flex justify-center text-center items-center text-white text-xs w-6 h-6 top-0 -right-1 rounded-full absolute">
                  {notifications.length}
                </div>
              </>
            )}
          </button> */}
          <Link
            to="/wishlist"
            className="py-2 px-4 text-center hover:bg-whatsapp hover:text-white rounded-lg"
            title="Wishlist"
          >
            <FaRegHeart className="w-6 h-6" />
          </Link>

          {isLogin && (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="py-2 px-4 text-center hover:bg-whatsapp hover:text-white rounded-lg"
              >
                <VscAccount className="w-6 h-6" title="Profile" />
              </button>
              {isProfileOpen && (
                <div className="absolute top-10 -left-0 w-36 bg-white shadow-lg border">
                  <div
                    className="py-2 px-4 text-start cursor-pointer hover:bg-gray-200"
                    onClick={handleProfile}
                  >
                    Profile
                  </div>
                  <div
                    className="py-2 px-4 text-start cursor-pointer hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}
          <Link
            to="/sell"
            className="py-2 px-4 w-20 text-center hover:bg-whatsapp hover:text-white rounded-lg"
          >
            Sell
          </Link>

          {!isLogin && (
            <>
              <Link
                to="/login"
                className="py-2 px-4 w-20 text-center hover:bg-whatsapp hover:text-white rounded-lg"
              >
                Login
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden cursor-pointer">
          <FiMenu className="w-6 h-6" onClick={handleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
