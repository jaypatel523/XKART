import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import ChatUser from "./ChatUser";
import Chat from "./Chat";

const ChatPage = () => {
  return (
    <>
      <div className="border border-blue-500 h-[35rem] m-10 flex">
        <div className="w-full md:w-1/2 border border-r-gray-300">
          <div className="px-4 py-6 flex items-center justify-between">
            <h1 className="font-bold ml-4">Inbox</h1>
            <BsSearch />
          </div>
          <div className="border border-gray-300"></div>
          <div className="w-full h-[30rem] overflow-y-auto">
            <ChatUser />
          </div>
        </div>
        <div className="w-2/3 hidden md:block">
          <div className="px-4 py-[1.28rem] flex items-center justify-between">
            <div className="flex items-center">
              <MdArrowBack className="block md:hidden w-6 h-6" />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWgEpVVi0nvZNXMttIlK_HvE-fP1UzwMDPA&usqp=CAU"
                alt="this is image"
                className="w-8 h-8 ml-4 mr-2"
              />
              <h1 className="font-bold">Naruto Uzumaki</h1>
            </div>
            <AiOutlineClose className="w-6 h-6" />
          </div>
          <div className="border border-gray-300"></div>
          <Chat />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
