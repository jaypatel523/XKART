import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>This is navbar</div>
      <Link to="/login" className="border border-red-600">
        Login
      </Link>
      <Link to="/register" className="border border-blue-600">
        Register
      </Link>
    </>
  );
};

export default Navbar;
