import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";

const Sell = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [listValue, setListValue] = useState("Mobile");

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
                value={listValue}
                readOnly
              />
              <SlArrowDown />
              {isListOpen && (
                <>
                  <div className="absolute top-10 left-0 w-[100%] border border-gray-200 bg-gray-100">
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => setListValue("Mobile")}
                    >
                      Mobile
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => setListValue("Laptop")}
                    >
                      Laptop
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => setListValue("Car")}
                    >
                      Car
                    </div>
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => setListValue("Motorcycle")}
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
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="brand"
              id="brand"
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
            />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="p-2 border border-gray-200 hover:border-gray-400 focus:outline-none"
              name="city"
              id="city"
            />
          </div>
        </div>
        <div className="border border-gray-300 my-2"></div>
        <div className="sm:px-6 md:px-10 md:py-4 p-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-10 py-2"
          >
            Post Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Sell;
