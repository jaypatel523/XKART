import React, { useState } from "react";

import { RouterProvider } from "react-router-dom";
import { MediaContext } from "./Context";
import router from "./router";

const App = () => {
  const [user, setUser] = useState({ userId: "", username: "", email: "" });
  return (
    <MediaContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </MediaContext.Provider>
  );
};

export default App;
