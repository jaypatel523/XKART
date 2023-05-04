import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserContext } from "../../../Context";

const ChatUser = ({
  conversation,
  isConversationOpen,
  currentuser,
  arrivalMessage,
  countArrivalMessages,
}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const buyerId = conversation.members.find(
      (id) => id !== currentuser.userId
    );

    axios
      .get("/api/getuserdetails/" + buyerId)
      .then((res) => {
        // console.log(res);
        setUser(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentuser, conversation]);

  return (
    <>
      <div className="px-4 py-[1.28rem] cursor-pointer hover:bg-gray-200 hover:text-black flex items-center justify-between">
        <div className="flex-col items-center text-center">
          <div className="flex items-center text-center">
            {user?.profile ? (
              <>
                <img
                  src={user.profile}
                  alt="this is image"
                  className="w-8 h-8 ml-4 mr-2"
                />
              </>
            ) : (
              <>
                <img
                  src="../../../../assets/default_profile.webp"
                  alt="this is image"
                  className="w-8 h-8 ml-4 mr-2"
                />
              </>
            )}

            <h1 className="">{user?.username}</h1>
          </div>
          {/* <div className="font-bold ml-14 text-center">
            {countArrivalMessages != 0
              ? `${countArrivalMessages} new messages`
              : ""}
          </div> */}
        </div>
        {/* <BsThreeDotsVertical className="w-6 h-6" /> */}
      </div>
      <div className="border border-gray-300"></div>
    </>
  );
};

export default ChatUser;
