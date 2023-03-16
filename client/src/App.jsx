import React, { useState } from "react";

import { RouterProvider } from "react-router-dom";
import { UserContext } from "./Context";
import router from "./router";

const App = () => {
  const [user, setUser] = useState({
    userId: sessionStorage.getItem("userId"),
    username: sessionStorage.getItem("username"),
    email: sessionStorage.getItem("email"),
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
};

export default App;
