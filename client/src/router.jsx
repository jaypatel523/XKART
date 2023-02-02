import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import Sell from "./components/Sell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/chat",
    element: <h1>Chat page comming soon...</h1>,
  },
  {
    path: "/wishlist",
    element: <h1>Wishlist page comming soon...</h1>,
  },
]);

export default router;
