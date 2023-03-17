import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { UserContext } from "./Context";
import router from "./router";

const App = () => {
  const [user, setUser] = useState({
    userId: sessionStorage.getItem("userId"),
    username: sessionStorage.getItem("username"),
    email: sessionStorage.getItem("email"),
  });

  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("userId") ? true : false
  );

  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
};

export default App;
