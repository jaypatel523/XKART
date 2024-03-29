import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("user");
  const [isAdminSelected, setisAdminSelected] = useState(false);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const navigateTo = useNavigate();

  const validatePassword = (e) => {
    setPassword(e.target.value);
    if (admin === "admin") return;
    if (validator.isStrongPassword(e.target.value)) {
      setPasswordError("Strong Password");
    } else {
      setPasswordError(
        "Passwords must have at least 8 characters and contain the following: uppercase letters, lowercase letters, numbers, and symbols*"
      );
    }
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (admin === "admin") return;
    if (validator.isEmail(e.target.value)) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Invalid Email*");
    }
  };

  const { isLogin, setIsLogin, user, setUser, isAdmin, setIsAdmin } =
    useContext(UserContext);

  const handleLogin = () => {
    const data = { email, password, admin };

    if (isAdminSelected) {
      setIsAdmin(true);
      axios.post("/api/adminlogin", data).then((res) => {
        if (res.data.success) {
          console.log(res.data.user);
          sessionStorage.setItem("userId", res.data.user._id);
          sessionStorage.setItem("username", res.data.user.username);
          sessionStorage.setItem("email", res.data.user.email);
          setIsLogin(true);
          setUser({
            userId: res.data.user._id,
            username: res.data.user.username,
            email: res.data.user.email,
          });
          toast("Login successfully", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast(res.data.message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        navigateTo("/admindashboard");
      });
    } else {
      axios
        .post("/api/login", data)
        .then((res) => {
          if (res.data.success) {
            sessionStorage.setItem("userId", res.data.user._id);
            sessionStorage.setItem("username", res.data.user.username);
            sessionStorage.setItem("email", res.data.user.email);
            setIsLogin(true);
            setUser({
              userId: res.data.user._id,
              username: res.data.user.username,
              email: res.data.user.email,
            });
            toast("Login successfully", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast(res.data.message, {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          navigateTo("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      // setEmail(res.user.email);

      axios
        .post("/api/loginWithGoogle", { email: res.user.email })
        .then((res) => {
          if (res.data.success) {
            sessionStorage.setItem("userId", res.data.user._id);
            sessionStorage.setItem("username", res.data.user.username);
            sessionStorage.setItem("email", res.data.user.email);
            setIsLogin(true);
            setUser({
              userId: res.data.user._id,
              username: res.data.user.username,
              email: res.data.user.email,
            });
            toast("Login successfully", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            navigateTo("/");
          } else {
            toast(res.data.message, {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 w-[500px] sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg rounded-xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-semibold max-w-xs w-64 text-center">
                  Login to your account
                </h1>
              </div>
              <div className=" flex justify-around ">
                <div>
                  <input
                    type="radio"
                    id="admin"
                    name="admin"
                    value="admin"
                    onChange={(e) => {
                      setAdmin(e.target.value);
                      setisAdminSelected(true);
                    }}
                    checked={admin === "admin"}
                    className="mx-1.5"
                  />

                  <label htmlFor="admin">Admin</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="user"
                    name="user"
                    value="user"
                    onChange={(e) => {
                      setAdmin(e.target.value);
                      setisAdminSelected(false);
                    }}
                    checked={admin === "user"}
                    className="mx-1.5"
                  />
                  <label htmlFor="user">User</label>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <span
                      className={
                        emailError === "Valid Email"
                          ? "text-success text-red-500 text-sm"
                          : "text-danger text-red-500 text-sm"
                      }
                    >
                      {emailError}
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="mb-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      value={email}
                      onChange={validateEmail}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <span
                      className={
                        passwordError === "Strong Password"
                          ? "text-success text-red-500 text-sm mb-10"
                          : "text-danger text-red-500 text-sm mb-10"
                      }
                    >
                      {passwordError}
                    </span>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="mb-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      value={password}
                      onChange={validatePassword}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative text-center">
                    {isAdminSelected ? (
                      <>
                        <button
                          className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded w-[100%]"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded w-[100%]"
                          onClick={handleLogin}
                          disabled={
                            emailError === "Valid Email" &&
                            passwordError === "Strong Password"
                              ? false
                              : true
                          }
                        >
                          Login
                        </button>
                      </>
                    )}
                  </div>
                  <div className="relative text-center flex items-center">
                    <div className="border border-gray-300 w-[200px] h-0 mr-2 my-2"></div>
                    <div>or</div>
                    <div className="border border-gray-300 w-[200px] h-0 ml-2 my-2"></div>
                  </div>
                  {!isAdminSelected && (
                    <div className="relative text-center border-2 rounded">
                      <button
                        className="flex items-center justify-center hover:bg-gray-100 py-2 px-4 rounded w-[100%]"
                        onClick={handleSignInWithGoogle}
                      >
                        <FcGoogle className="mr-2 w-6 h-6" /> Sign in with
                        google
                      </button>
                    </div>
                  )}
                  <div className="text-center text-blue-500 text-sm">
                    <Link
                      className="text-blue-500 py-2 px-4  cursor-pointer rounded"
                      to="/register"
                    >
                      you don't have an account ?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-52 h-52 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center border border-black">
        THis is model
      </div> */}
    </>
  );
};

export default Login;
