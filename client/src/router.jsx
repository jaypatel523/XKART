import { createBrowserRouter } from "react-router-dom";
import Wishlist from "./components/Pages/Wishlist";
import Login from "./components/Authentication/Login";
import Main from "./components/Pages"
import Register from "./components/Authentication/Register";
import ChatPage from "./components/Pages/ChatPage";
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu";
import Sell from "./components/Pages/Sell";
import Profile from "./components/Pages/Profile"
import SingleProduct from "./components/Pages/SingleProduct";


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
    path: "/singleproduct",
    element : <SingleProduct />
  }

]);

export default router;
