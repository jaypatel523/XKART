import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Chat from "./components/Pages/Chat";
import Home from "./components/Pages/Home";
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
]);

export default router;
