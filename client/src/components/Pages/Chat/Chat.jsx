import React, { useContext } from "react";
import { UserContext } from "../../../Context";
import { format } from "timeago.js";

const Chat = ({ message }) => {
  const { user } = useContext(UserContext);
  // console.log(user);

  return (
    <>
      {message?.sender === user.userId ? (
        <>
          <div className="flex flex-col items-end">
            <span className="bg-gray-200 p-2 rounded-full">{message.text}</span>
            <span className="text-[12px] mx-2">
              {" "}
              {format(message.createdAt)}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-start">
            <span className="bg-blue-500 text-white p-2 rounded-full">
              {message.text}
            </span>
            <span className="text-[12px] mx-2">
              {" "}
              {format(message.createdAt)}
            </span>
          </div>
        </>
      )}
      {/* <div className="text-right">{message.text}</div>
        <div className="text-left">reciever</div> */}
    </>
  );
};

export default Chat;
