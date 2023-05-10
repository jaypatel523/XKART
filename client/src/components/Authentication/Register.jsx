import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Context";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config";
import validator from "validator";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const [isOTPGenerated, setIsOTPGenerated] = useState(false);

  const { user, setUser, setIsLogin } = useContext(UserContext);
  const navigateTo = useNavigate();

  const validatePassword = (e) => {
    setPassword(e.target.value);
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
    if (validator.isEmail(e.target.value)) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Invalid Email*");
    }
  };

  const validateUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 6) {
      setUsernameError("Username must have at least 6 length");
    } else {
      setUsernameError("Valid username");
    }

    console.log(username);
  };

  const handleGenerateOTP = () => {
    if (!username) {
      toast("Please enter your name properly", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (username.length <= 6) {
      toast("Length of username should be at least 6 chatacters", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!password) {
      toast("Please enter proper password", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (password.length <= 8) {
      toast("Length of password should be at least 6 chatacters", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const data = { username, email, password };
    axios.post("/api/generateOTP", data).then((res) => {
      console.log(res);
      if (res.data.success) {
        setIsOTPGenerated(true);
        toast("OTP sent successfully", {
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
    });
  };

  const handleRegister = () => {
    const data = { username, email, password, OTP };
    axios
      .post("/api/register", data)
      .then((res) => {
        console.log(res);
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
          toast("Register successfully", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsOTPGenerated(false);
          navigateTo("/");
        } else {
          toast("Something went wrong, please try again", {
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
        console.log(err);
      });
  };

  const handleSignupInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      // console.log(res);
      const data = {
        username: res.user.displayName,
        email: res.user.email,
        password: res.user.email,
      };
      axios
        .post("/api/registerWithGoogle", data)
        .then((res) => {
          // console.log(res);
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
            toast("Register successfully", {
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
            toast("Something went wrong, please try again", {
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
          console.log(err);
        });
      // console.log(data);
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
                  {!isOTPGenerated
                    ? "Create an account"
                    : "OTP has been sent to your email !"}
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {isOTPGenerated ? (
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="mb-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        value={OTP}
                        onChange={(e) => setOTP(e.target.value)}
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        OTP
                      </label>
                    </div>
                  ) : (
                    <>
                      <div className="relative">
                        <span
                          className={
                            usernameError === "Valid Email"
                              ? "text-success text-red-500 text-sm"
                              : "text-danger text-red-500 text-sm"
                          }
                        >
                          {usernameError}
                        </span>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          className="mb-3 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Username"
                          value={username}
                          onChange={validateUsername}
                        />
                        <label
                          htmlFor="username"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Username
                        </label>
                      </div>
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
                              ? "text-success text-red-500 text-sm"
                              : "text-danger text-red-500 text-sm"
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
                    </>
                  )}
                  <div className="relative text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded w-[100%]"
                      type="submit"
                      onClick={
                        !isOTPGenerated ? handleGenerateOTP : handleRegister
                      }
                      disabled={
                        emailError === "Valid Email" &&
                        passwordError === "Strong Password"
                          ? false
                          : true
                      }
                    >
                      Register
                    </button>
                  </div>
                  <div className="relative text-center flex items-center">
                    <div className="border border-gray-300 w-[200px] h-0 mr-2 my-2"></div>
                    <div>or</div>
                    <div className="border border-gray-300 w-[200px] h-0 ml-2 my-2"></div>
                  </div>
                  <div className="relative text-center border-2 rounded">
                    <button
                      className="flex items-center justify-center hover:bg-gray-100 py-2 px-4 rounded w-[100%]"
                      onClick={handleSignupInWithGoogle}
                    >
                      <FcGoogle className="mr-2 w-6 h-6" /> Sign up with google
                    </button>
                  </div>
                  {!isOTPGenerated && (
                    <div className="text-center text-blue-500 text-sm">
                      <Link
                        className="text-blue-500 py-2 px-4  cursor-pointer rounded"
                        to="/login"
                      >
                        already have an account ?
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
