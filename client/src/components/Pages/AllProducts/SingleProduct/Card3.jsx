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
  const { user, isAdmin, setIsAdmin } = useContext(UserContext);
  const [isSellerSame, setIsSameSeller] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const navigateTo = useNavigate();
  const socket = useRef();

  useEffect(() => {
    if (user.userId === product.sellerId) {
      setIsSameSeller(true);
    }
  }, []);

  const handleOpenChat = () => {
    navigateTo("/chat");
  };

  const openDialog = () => {
    setIsOpenDialog(true);
    navigateTo("/chat");
  };

  const closeDialog = () => {
    setIsOpenDialog(false);
  };

  // console.log(isAdmin);

  // console.log(user);

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

  // useEffect(() => {
  //   if (!user.userId) return;
  //   // console.log(user.email);

  //   axios.post("/api/getUser", { data: user.email }).then((res) => {
  //     console.log(res);
  //     if (res.data.user?.isAdmin) {
  //       setIsAdmin(res.data.user.isAdmin);
  //     }
  //   });
  // }, []);

  // console.log(product);

  const updateMarkAsSold = () => {
    axios.patch("/api/updateMarkAsSold", product).then((res) => {
      // console.log(res);
      if (res.data.success) {
        toast("Product mark as sold", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigateTo("/profile");
      } else {
        toast(res.data.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <>
      {!(user.username === "Admin") && (
        <div className="border rounded border-gray-200 bg-white shadow-lg">
          <div className="">
            <div className="p-4">
              <div>
                <div className="flex mb-2 justify-between text-xl font-semibold cursor-pointer">
                  <div className="flex justify-between">
                    <VscAccount className="w-12 h-12" />
                    <div className="my-auto ml-2">{product.seller}</div>
                  </div>
                  {/* <IoIosArrowForward className="my-auto" /> */}
                </div>
              </div>
              <div>
                {isSellerSame ? (
                  <>
                    <div
                      className="cursor-pointer text-center py-3 text-2xl bg-whatsapp text-white rounded-lg"
                      onClick={updateMarkAsSold}
                    >
                      Mark as sold
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="cursor-pointer text-center py-3 text-2xl bg-whatsapp text-white rounded-lg"
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
      )}
    </>
  );
};

export default Card3;
