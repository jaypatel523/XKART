import React, { useContext, useEffect, useReducer, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import sellReducer from "../Reducer/sellReducer";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const initialState = {
  category: "Mobile",
  title: "",
  brand: "",
  description: "",
  price: "",
  image1: "",
  image2: "",
  image3: "",
  state: "",
  city: "",
  seller: "",
  contact: "",
  sellerId: "",
  adminApproved: false,
  adminRejected: false,
  markedSold : false,
  isPending : true,
};

const Sell = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [state, dispatch] = useReducer(sellReducer, initialState);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(UserContext);

  const firebaseConfig = {
    apiKey: "AIzaSyC22nzqEqUynJgTmhzDcKDla5lkillxWJ4",
    authDomain: "temp-39228.firebaseapp.com",
    projectId: "temp-39228",
    storageBucket: "temp-39228.appspot.com",
    messagingSenderId: "169880381340",
    appId: "1:169880381340:web:23f3ce849c5ab7d81a8a59",
    measurementId: "G-5YWBS426RW",
  };
  const bucket_url = "gs://temp-39228.appspot.com/";

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app, bucket_url);

  const handleSell = () => {
    if (
      !state.title ||
      !state.brand ||
      !state.description ||
      !state.price ||
      !state.state ||
      !state.city ||
      !state.city ||
      !img1 ||
      !img2 ||
      !img3
    ) {
      toast("Please, provide complete details", {
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

    setIsPostLoading(true);
    console.log(state);

    const storageRef1 = ref(storage, `XKART/${img1.name}`);
    const storageRef2 = ref(storage, `XKART/${img2.name}`);
    const storageRef3 = ref(storage, `XKART/${img3.name}`);

    uploadBytes(storageRef1, img1).then((snapshot) => {
      getDownloadURL(storageRef1).then((res) => {
        console.log("URL1", res);
        dispatch({ type: "IMAGE_URL1", payload: res });
        console.log(state);
      });
    });

    uploadBytes(storageRef2, img2).then((snapshot) => {
      getDownloadURL(storageRef2).then((res) => {
        console.log("URL2", res);
        dispatch({ type: "IMAGE_URL2", payload: res });
      });
    });

    uploadBytes(storageRef3, img3).then((snapshot) => {
      getDownloadURL(storageRef3).then((res) => {
        console.log("URL3", res);
        dispatch({ type: "IMAGE_URL3", payload: res });
      });
    });
  };

  if (state.image1 && state.image2 && state.image3) {
    console.log("Post request");
    state.sellerId = user.userId;
    let data = { userId: sessionStorage.getItem("userId"), state };
    axios
      .post("/api/sellProduct", data)
      .then((res) => {
        console.log(res);
        toast("Product added successfully", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({ type: "INITIAL_STATE" });
        setIsPostLoading(false);
        setIsPosted(true);
        // navigate("/");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
  // console.log(user);
  useEffect(() => {
    if (!user.userId) {
      toast("You need to login first", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (!isPosted) return;
    setTimeout(() => {
      setIsPosted(false);
      navigate("/");
    }, 2000);
  }, [isPosted]);

  return (
    <>
      <div className="border border-black sm:mx-32 md:mx-48 my-10 mx-2">
        <div className="text-center p-2 text-2xl font-bold">Post Your Add</div>
        <div className="border border-gray-300 my-2"></div>
        <div className="sm:px-6 md:px-10 md:py-4 p-2">
          <h1 className="font-bold text-xl my-4">Include Some Details</h1>
          <div className="flex flex-col my-4">
            <label htmlFor="category">Category</label>
            <div
              className="relative p-2 flex items-center justify-between border border-gray-200 cursor-pointer"
              onClick={() => setIsListOpen(!isListOpen)}
            >
              <input
                type="text"
                className="focus:outline-none cursor-pointer"
                name="category"
                id="category"
                value={state.category}
                readOnly
              />
              <SlArrowDown />
              {isListOpen && (
                <>
                  <div className="absolute top-10 left-0 w-[100%] border border-gray-200 bg-gray-100">
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      //   onClick={() => (state.category = "Mobile")}
                      onClick={() => {
                        dispatch({
                          type: "CHAGE_CATEGORY",
                          payload: "Mobile",
                        });
                      }}
                    >
                      Mobile
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      //   onClick={() => (state.category = "Laptop")}
                      onClick={() => {
                        dispatch({
                          type: "CHAGE_CATEGORY",
                          payload: "Laptop",
                        });
                      }}
                    >
                      Laptop
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      //   onClick={() => (state.category = "Car")}
                      onClick={() => {
                        dispatch({ type: "CHAGE_CATEGORY", payload: "Car" });
                      }}
                    >
                      Car
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      //   onClick={() => (state.category = "Motorcycle")}
                      onClick={() => {
                        dispatch({
                          type: "CHAGE_CATEGORY",
                          payload: "Motorcycle",
                        });
                      }}
                    >
                      Motorcycle
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="title">Add Title</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="title"
              id="title"
              value={state.title}
              onChange={(e) => {
                dispatch({ type: "ONCHANGE_TITLE", payload: e });
              }}
              required
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="brand"
              id="brand"
              value={state.brand}
              onChange={(e) => {
                dispatch({ type: "ONCHANGE_BRAND", payload: e });
              }}
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="Description">Description</label>
            <textarea
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="Description"
              id="Description"
              rows={4}
              value={state.description}
              onChange={(e) => {
                dispatch({ type: "ONCHANGE_DESCRIPTION", payload: e });
              }}
            />
          </div>
        </div>
        <div className="border border-gray-300 my-2"></div>
        <div className="sm:px-6 md:px-10 md:py-4 p-2">
          <h1 className="font-bold text-xl my-4">Set Price</h1>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <div className="flex items-center justify-start hover:border-gray-400 border border-gray-200">
              <label htmlFor="price">
                <BsCurrencyRupee className="w-4 h-4 ml-2" />
              </label>
              <input
                type="text"
                className="w-full p-2 focus:outline-none"
                name="price"
                id="price"
                value={state.price}
                onChange={(e) => {
                  dispatch({ type: "ONCHANGE_PRICE", payload: e });
                }}
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 my-2"></div>
        <div className="sm:px-6 md:px-10 md:py-4 p-2">
          <h1 className="font-bold text-xl my-4">Upload Photos</h1>
          <div className="flex justify-between">
            <div className="">
              <input
                type="file"
                id="img1"
                className="hidden invisible w-[450px]"
                name="img1"
                onChange={(e) => setImg1(e.target.files[0])}
              />
              <label htmlFor="img1">
                <AiFillCamera className="cursor-pointer w-20 h-20 hover:bg-gray-200" />
              </label>
              {img1 && (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    color="#3B82F6"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="">
              <input
                type="file"
                id="img2"
                className="hidden invisible w-[450px] my-4"
                name="img2"
                onChange={(e) => setImg2(e.target.files[0])}
              />
              <label htmlFor="img2">
                <AiFillCamera className="cursor-pointer w-20 h-20 hover:bg-gray-200" />
              </label>
              {img2 && (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    color="#3B82F6"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <input
                type="file"
                id="img3"
                className="hidden invisible w-[450px] my-4"
                name="img3"
                onChange={(e) => setImg3(e.target.files[0])}
              />
              <label htmlFor="img3">
                <AiFillCamera className="cursor-pointer w-20 h-20 hover:bg-gray-200" />
              </label>
              {img3 && (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    color="#3B82F6"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border border-gray-300 my-2"></div>
        <div className="sm:px-6 md:px-10 md:py-4 p-2">
          <h1 className="font-bold text-xl my-4">Confirm Your Location</h1>
          <div className="flex flex-col my-4">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="state"
              id="state"
              value={state.state}
              onChange={(e) => {
                dispatch({ type: "ONCHANGE_STATE", payload: e });
              }}
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="city"
              id="city"
              value={state.city}
              onChange={(e) => {
                dispatch({ type: "ONCHANGE_CITY", payload: e });
              }}
            />
          </div>
        </div>
        <div className="border border-gray-300 my-2"></div>
        {/* <div className="sm:px-6 md:px-10 md:py-4 p-2">
          <h1 className="font-bold text-xl my-4">Confirm Your Details</h1>
          <div className="flex flex-col my-4">
            <label htmlFor="seller">Name</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="seller"
              id="seller"
              value={state.seller}
              onChange={(e) => {
                dispatch({ type: "ONCHANGE_SELLER", payload: e });
              }}
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="contact">Contact No</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="contact"
              id="contact"
              value={state.contact}
              onChange={(e) => {
                dispatch({ type: "ONCHANGE_CONTACT", payload: e });
              }}
            />
          </div>
        </div> */}
        {/* <div className="border border-gray-300 my-2"></div> */}
        <div className="sm:px-6 md:px-10 md:py-4 p-2 flex">
          {!isPostLoading && !isPosted && (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-10 py-2"
              onClick={handleSell}
            >
              Post Now
            </button>
          )}

          {isPostLoading && (
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-10 py-2 disabled:opacity-75"
              disabled
            >
              Posting...
            </button>
          )}

          {isPosted && !isPostLoading && (
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-10 py-2 disabled:opacity-75"
              disabled
            >
              Posted
            </button>
          )}

          {isPostLoading && (
            <div className="ml-4 w-10 h-10">
              <ReactLoading type="spin" color="#3B82F6" width="100%" />
            </div>
          )}

          {isPosted && !isPostLoading && (
            <div className="ml-4 w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                color="#3B82F6"
                fill="currentColor"
                className="w-full"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sell;
