import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Main from "./components/Pages";
import Register from "./components/Authentication/Register";
import ChatPage from "./components/Pages/Chat/ChatPage";
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/Menu";
import Sell from "./components/Pages/Sell";
import Profile from "./components/Pages/Profile";
import SingleProduct from "./components/Pages/AllProducts/SingleProduct/SingleProduct";
import Wishlist from "./components/Pages/Wishlist/Wishlist";
import Products from "./components/Pages/AllProducts/Products";

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
]);

export default router;
