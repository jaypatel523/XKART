import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sell",
    element: <h1> Selling page comming soon...</h1>,
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
