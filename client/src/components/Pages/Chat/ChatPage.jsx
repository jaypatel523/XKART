import React, { useContext, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import ChatUser from "./ChatUser";
import Chat from "./Chat";
import { UserContext } from "../../../Context";
import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const { user } = useContext(UserContext);

  // to fetch all conversation of login user
  const [conversations, setConversations] = useState([]);

  // when you click on any conversation it stores the details of that conversation
  const [currentChat, setCurrentChat] = useState(null);

  const [isConversationOpen, setIsConversationOpen] = useState(false);

  // it stores the messages of current conversation (conversation that you clicked)
  const [messages, setMessages] = useState([]);

  // it stores the message you are typing now
  const [newMessage, setNewMessage] = useState("");

  // it stores the message that arrive from another user
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const [currentConversationUser, setCurrentConversationUser] = useState("");

  // it is for scroll effect
  const scrollRef = useRef();

  // connecting to socket server and catch socket event on getMessage (when any message arrives)
  const socket = useRef();

  const navigateTo = useNavigate();
  useEffect(() => {
    console.log(user);
    if (!user.userId) {
      navigateTo("/login");
    }

    socket.current = io("http://localhost:8000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  // change on arrival message (add arrival message into messages)
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // testing socket
  // useEffect(() => {
  //   socket?.on("welcome", (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  // add user
  useEffect(() => {
    if (!user.userId) return;

    socket.current.emit("addUser", user.userId);
    console.log("HI");

    // to check working of getUsers event of socket server
    // socket.current.on("getUsers", (users) => {
    //   console.log(users);
    // });
  }, [user]);

  //  get all conversations of current user
  useEffect(() => {
    if (!user.userId) return;

    axios
      .get("api/conversation/" + user.userId)
      .then((res) => {
        setConversations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("sender", user.userId);
  // get all messages using conversation id
  useEffect(() => {
    if (!currentChat) return;
    axios
      .get("api/getmessages/" + currentChat?._id)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentChat]);

  // handle current message which user will write in input box
  console.log(currentChat);
  const handleNewChat = (e) => {
    e.preventDefault();

    const message = {
      sender: user.userId,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user.userId
    );

    console.log("rec", receiverId);

    socket.current.emit("sendMessage", {
      senderId: user.userId,
      receiverId,
      text: newMessage,
    });

    axios
      .post("api/sendmessage", message)
      .then((res) => {
        setMessages([...messages, res.data]);
        setNewMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!currentChat) return;

    const conversationUser = currentChat?.members.find(
      (member) => member !== user.userId
    );
    axios
      .get("/api/getuserdetails/" + conversationUser)
      .then((res) => {
        setCurrentConversationUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setCurrentConversationUser(conversationUser);
  }, [currentChat]);

  // this is the effect whenever user open any chat
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isConversationOpen]);

  return (
    <>
      <div className="border border-black h-[35rem] m-10 flex">
        <div className="w-full md:w-1/2 border border-r-gray-300">
          <div className="px-4 py-6 flex items-center justify-between">
            <h1 className="font-bold ml-4">Inbox</h1>
            <BsSearch />
          </div>
          <div className="border border-gray-300"></div>
          <div className="w-full h-[30rem] overflow-y-auto">
            {conversations.map((conversation, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentChat(conversation);
                  setIsConversationOpen(true);
                }}
              >
                <ChatUser conversation={conversation} currentuser={user} />
              </div>
            ))}
          </div>
        </div>

        {currentChat && isConversationOpen && (
          <>
            <div className="w-2/3 hidden md:block">
              <div className="px-4 py-[1.28rem] flex items-center justify-between">
                <div className="flex items-center">
                  <MdArrowBack className="block md:hidden w-6 h-6" />
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
                  <h1 className="font-bold">
                    {currentConversationUser.username}
                  </h1>
                </div>
                <AiOutlineClose
                  onClick={() => setIsConversationOpen(false)}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
              <div className="border border-gray-300"></div>
              <div className="p-4 h-[26rem] overflow-y-auto">
                {messages.map((m, index) => {
                  return (
                    <div key={index} className="m-4" ref={scrollRef}>
                      <Chat message={m} />
                    </div>
                  );
                })}
              </div>
              <form className="p-4 flex" onSubmit={(e) => handleNewChat(e)}>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full p-2 h-full border border-gray-400 focus:outline-none"
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                />
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 cursor-pointer hover:bg-gray-200 rounded-sm mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </>
        )}

        {!isConversationOpen && (
          <>
            <div className="flex w-2/3 items-center justify-center">
              Open a conversation
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatPage;
