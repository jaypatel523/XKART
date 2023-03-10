import { createBrowserRouter } from "react-router-dom";
import Wishlist from "./components/Pages/Wishlist";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Chat from "./components/Pages/Chat";
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu";
import Navbar from "./components/Pages/Navbar";
import Sell from "./components/Pages/Sell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default router;
