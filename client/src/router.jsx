import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Navbar from "./components/Pages/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
