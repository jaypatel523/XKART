import React, { useContext, useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { UserContext } from "../../../../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card3 = ({ product }) => {
  const { user } = useContext(UserContext);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isSellerSame, setIsSameSeller] = useState(false);
  const navigateTo = useNavigate();

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
  };

  const closeDialog = () => {
    setIsOpenDialog(false);
  };

  const startConversation = () => {
    const receiverId = product.sellerId;
    let conversation = { senderId: user.userId, receiverId };
    console.log(conversation);
    axios
      .post("/api/startchat", conversation)
      .then((res) => {
        navigateTo("/chat");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <div className="border rounded border-gray-200 shadow-lg">
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
                  <div
                    className="cursor-pointer text-center mb-2 py-3 text-2xl bg-blue-500 text-white rounded-lg"
                    onClick={handleOpenChat}
                  >
                    Open Chat
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="cursor-pointer text-center mb-2 py-3 text-2xl bg-blue-500 text-white rounded-lg"
                    onClick={openDialog}
                  >
                    Chat with seller
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpenDialog && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-40 bg-black text-white">
          <div className="rounded-sm w-[400px] p-10 text-center bg-white text-black">
            <div className=" p-4 ">Are you sure you want to chat ?</div>
            <div className="flex justify-evenly">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-4 py-2"
                onClick={startConversation}
              >
                Start Chat
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-4 py-2"
                onClick={closeDialog}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card3;
