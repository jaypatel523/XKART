import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { UserContext } from "./Context";
import router from "./router";
import { io } from "socket.io-client";
import "../src/temp.css";
const App = () => {
  // console.log(socket);

  const [user, setUser] = useState({
    userId: sessionStorage.getItem("userId"),
    username: sessionStorage.getItem("username"),
    email: sessionStorage.getItem("email"),
  });

  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("userId") ? true : false
  );

  const [isAdmin, setIsAdmin] = useState(false);

  const socket = useRef();
  socket.current = io("http://localhost:8000");

  return (
    <>
      <ToastContainer />
      <UserContext.Provider
        value={{
          user,
          setUser,
          isLogin,
          setIsLogin,
          socket,
          isAdmin,
          setIsAdmin,
        }}
      >
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
};

export default App;
