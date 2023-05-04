import React, { useContext, useEffect, useRef, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { UserContext } from "../../../../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";

const Card3 = ({ product }) => {
  const { user } = useContext(UserContext);
  const [isSellerSame, setIsSameSeller] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const navigateTo = useNavigate();
  const socket = useRef();

  useEffect(() => {
    if (user.userId === product.sellerId) {
      setIsSameSeller(true);
    }
  }, []);

  const startConversation = () => {
    if (!user.userId) {
      toast("You need to login first", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const receiverId = product.sellerId;
    let conversation = { senderId: user.userId, receiverId };
    // console.log(conversation);
    socket.current = io("http://localhost:8000");
    axios
      .post("/api/startchat", conversation)
      .then((res) => {
        socket.current.emit("startConversation", { userId: user.userId });
        navigateTo("/chat", {
          state: product,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  // console.log(product);
  useEffect(() => {
    if (!user.userId) {
      return;
    }

    axios
      .get("/api/findconversation/" + user.userId + "/" + product.sellerId)
      .then((res) => {
        // console.log(res);
        setIsStarted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="border rounded border-gray-200 bg-white shadow-lg">
        <div className="">
          <div className="p-4">
            <div>
              <div className="flex mb-2 justify-between text-xl font-semibold cursor-pointer">
                <div className="flex justify-between">
                  <VscAccount className="w-12 h-12" />
                  <div className="my-auto ml-2">{product.seller}</div>
                </div>
                <IoIosArrowForward className="my-auto" />
              </div>
            </div>
            <div>
              {isSellerSame ? (
                <>
                  <div className="cursor-pointer text-center mb-2 py-3 text-2xl bg-blue-500 text-white rounded-lg">
                    It's Your {product.category}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="cursor-pointer text-center mb-2 py-3 text-2xl bg-blue-500 text-white rounded-lg"
                    onClick={startConversation}
                  >
                    Chat with seller
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
