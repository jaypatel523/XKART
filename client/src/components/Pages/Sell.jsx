import React, { useReducer, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import sellReducer from "../Reducer/sellReducer";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const initialState = {
  category: "Mobile",
  title: "",
  brand: "",
  description: "",
  price: 0,
  image1: "",
  image2: "",
  image3: "",
  state: "",
  city: "",
};

const Sell = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [state, dispatch] = useReducer(sellReducer, initialState);
  const [img, setImg] = useState("");

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

  const handleUpload = (storageRef, image) => {
    // const storageRef = ref(storage, `XKART/${state.image1.name}`);
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(storageRef).then((res) => {
          console.log(res);
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleSell = () => {
    console.log(state);
    const storageRef1 = ref(storage, `XKART/${state.image1.name}`);
    const storageRef2 = ref(storage, `XKART/${state.image2.name}`);
    const storageRef3 = ref(storage, `XKART/${state.image3.name}`);

    let url1 = handleUpload(storageRef1, state.image1);
    let url2 = handleUpload(storageRef2, state.image2);
    let url3 = handleUpload(storageRef3, state.image3);

    // axios
    //   .post("/api/sellProduct", state)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });
  };

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
                className="focus:outline-none"
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
                        dispatch({ type: "CHAGE_CATEGORY", payload: "Mobile" });
                      }}
                    >
                      Mobile
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      //   onClick={() => (state.category = "Laptop")}
                      onClick={() => {
                        dispatch({ type: "CHAGE_CATEGORY", payload: "Laptop" });
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
            <div className="flex items-center justify-start border border-gray-200">
              <label htmlFor="price">
                <BsCurrencyRupee className="w-4 h-4 ml-2" />
              </label>
              <input
                type="text"
                className="w-full p-2 hover:border-gray-400 focus:outline-none"
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
            <div>
              <input
                type="file"
                id="img1"
                className="hidden invisible w-[450px]"
                name="img1"
                onChange={(e) => {
                  dispatch({ type: "ONCHANGE_IMG1", payload: e });
                }}
              />
              <label htmlFor="img1">
                <AiFillCamera className="cursor-pointer w-20 h-20 hover:bg-gray-200" />
              </label>
            </div>
            <div className="">
              <input
                type="file"
                id="img2"
                className="hidden invisible w-[450px] my-4"
                name="img2"
                onChange={(e) => {
                  dispatch({ type: "ONCHANGE_IMG2", payload: e });
                }}
              />
              <label htmlFor="img2">
                <AiFillCamera className="cursor-pointer w-20 h-20 hover:bg-gray-200" />
              </label>
            </div>
            <div>
              <input
                type="file"
                id="img3"
                className="hidden invisible w-[450px] my-4"
                name="img3"
                onChange={(e) => {
                  dispatch({ type: "ONCHANGE_IMG3", payload: e });
                }}
              />
              <label htmlFor="img3">
                <AiFillCamera className="cursor-pointer w-20 h-20 hover:bg-gray-200" />
              </label>
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
        <div className="sm:px-6 md:px-10 md:py-4 p-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-10 py-2"
            onClick={handleSell}
          >
            Post Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Sell;
