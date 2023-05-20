import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./Context";
import router from "./router";
import { io } from "socket.io-client";
import "../src/temp.css";
import Main from "./components/Pages";
import SingleProduct from "./components/Pages/AllProducts/SingleProduct/SingleProduct";
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/Pages/Footer";
import ChatPage from "./components/Pages/Chat/ChatPage";
import Wishlist from "./components/Pages/Wishlist/Wishlist";
import Profile from "./components/ProfilePages/Profile";
import Products from "./components/Pages/AllProducts/Products";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Sell from "./components/Pages/Sell";
import Categories from "./components/Pages/Categories";
import AdminDashboard from "./components/Authentication/Admin/AdminDashboard";

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

  useEffect(() => {
    axios.get("/api/getuserdetails/" + user.userId).then((res) => {
      if (res.data.user?.isAdmin) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, []);

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
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/sell" element={<Sell />} />
            <Route
              path="/product/:productId"
              element={
                <>
                  <Navbar />
                  <SingleProduct />
                  <Footer />
                </>
              }
            />
            <Route
              path="/chat"
              element={
                <>
                  <Navbar />
                  <ChatPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/wishlist"
              element={
                <>
                  <Navbar />
                  <Wishlist />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Navbar />
                  <Profile />
                  <Footer />
                </>
              }
            />
            <Route
              path="/:category"
              element={
                <>
                  <Navbar />
                  <Categories />
                  <Products />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
        {/* <RouterProvider router={router} /> */}
      </UserContext.Provider>
    </>
  );
};

export default App;
