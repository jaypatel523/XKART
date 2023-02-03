import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            border: "1px solid black",
            padding: "2rem",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            {" "}
            Login Form
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "0.5rem",
                marginBottom: "1.5rem",
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                padding: "0.5rem",
                marginBottom: "1.5rem",
              }}
            />
            <button
              style={{
                padding: "0.5rem",
                marginBottom: "1.5rem",
                border: "1px solid black",
                background: "#e8e6e6",
              }}
            >
              Login
            </button>
            <div style={{ textAlign: "center" }}>
              Don't have an account ?
              <Link
                style={{
                  marginLeft: 5,
                  border: "1px solid black",
                  outline: "none",
                  textDecoration: "none",
                  color: "black",
                  background: "#e8e6e6",
                  padding: "0.3rem",
                }}
                to="/register"
              >
                {" "}
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
