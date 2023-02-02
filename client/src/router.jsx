import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sell from "./components/Sell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/login",
    element: <h1>Login page comming soon...</h1>,
  },
  {
    path: "/register",
    element: <h1>Register page comming soon...</h1>,
  },
]);

export default router;
