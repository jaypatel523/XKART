import { createBrowserRouter } from "react-router-dom";
import Wishlist from "./components/Pages/Wishlist";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ChatPage from "./components/Pages/ChatPage";
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu";
import Navbar from "./components/Pages/Navbar";
import Sell from "./components/Pages/Sell";
import Profile from "./components/Pages/Profile";
import Main from "./components/Pages";

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
]);

export default router;
