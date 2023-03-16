import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ChatUser = () => {
  return (
    <>
      <div className="px-4 py-[1.28rem] cursor-pointer hover:bg-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWgEpVVi0nvZNXMttIlK_HvE-fP1UzwMDPA&usqp=CAU"
            alt="this is image"
            className="w-8 h-8 ml-4 mr-2"
          />
          <h1 className="font-bold">Naruto Uzumaki</h1>
        </div>
        <BsThreeDotsVertical className="w-6 h-6" />
      </div>
      <div className="border border-gray-300"></div>
    </>
  );
};

export default ChatUser;
