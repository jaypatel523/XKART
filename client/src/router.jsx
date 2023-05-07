import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Main from "./components/Pages";
import Register from "./components/Authentication/Register";
import ChatPage from "./components/Pages/Chat/ChatPage";
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu";
import Sell from "./components/Pages/Sell";

import SingleProduct from "./components/Pages/AllProducts/SingleProduct/SingleProduct";
import Wishlist from "./components/Pages/Wishlist/Wishlist";
import Products from "./components/Pages/AllProducts/Products";
import Profile from "./components/ProfilePages/Profile";

import AdminDashboard from "./components/Authentication/Admin/AdminDashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/:category",
        element: <Products />,
      },
      {
        path: "/product/:productId",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
  
]);

export default router;
