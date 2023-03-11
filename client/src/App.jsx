import React, { useState } from "react";

import { RouterProvider } from "react-router-dom";
import { UserContext } from "./Context";
import router from "./router";

const App = () => {
  const [user, setUser] = useState({ userId: "", username: "", email: "" });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
};

export default App;
