import React, { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [category, setCategory] = useState();
  const navigateTo = useNavigate();

  return (
    <div className="bg-white">
      <div className="border p-2 px-4 text-sm flex gap-3 justify-between overflow-x-scroll">
        <div>
          <div
            className="font-bold flex items-center p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => setIsAllOpen(!isAllOpen)}
          >
            All categories <SlArrowDown className="ml-2" />
          </div>
        </div>
        {isAllOpen && (
          <div className="absolute top-[135px] z-50 w-52 shadow-lg bg-white border border-gray-100">
            <div
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                navigateTo("/Mobile");
                setIsAllOpen(false);
              }}
            >
              Mobiles
            </div>
            <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                navigateTo("/Tv");
                setIsAllOpen(false);
              }}
            >
              Tvs
            </div>
            <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                navigateTo("/Laptop");
                setIsAllOpen(false);
              }}
            >
              Laptops
            </div>
            <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                navigateTo("/Book");
                setIsAllOpen(false);
              }}
            >
              Books
            </div>
            <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                navigateTo("/Car");
                setIsAllOpen(false);
              }}
            >
              Cars
            </div>
            <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                navigateTo("/Motorcycle");
                setIsAllOpen(false);
              }}
            >
              Motorcycles
            </div>
          </div>
        )}
        <div
          className="p-2 rounded-md hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            navigateTo("/Mobile");
            setIsAllOpen(false);
          }}
        >
          Mobiles
        </div>
        <div
          className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          onClick={() => {
            navigateTo("/Tv");
            setIsAllOpen(false);
          }}
        >
          Tvs
        </div>
        <div
          className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          onClick={() => {
            navigateTo("/Laptop");
            setIsAllOpen(false);
          }}
        >
          Laptops
        </div>
        <div
          className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          onClick={() => {
            navigateTo("/Book");
            setIsAllOpen(false);
          }}
        >
          Books
        </div>
        <div
          className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          onClick={() => {
            navigateTo("/Car");
            setIsAllOpen(false);
          }}
        >
          Cars
        </div>
        <div
          className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          onClick={() => {
            navigateTo("/Motorcycle");
            setIsAllOpen(false);
          }}
        >
          Motorcycles
        </div>
      </div>
    </div>
  );
};

export default Categories;
