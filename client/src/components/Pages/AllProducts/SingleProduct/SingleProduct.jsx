import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const handleApprove = () => {
    axios
      .patch("/api/adminApproved", location.state)
      .then((res) => {
        // console.log(res);
        toast("Product Approved", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigateTo("/admindashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReject = () => {
    axios
      .patch("/api/adminRejected", location.state)
      .then((res) => {
        toast("Product Rejected", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigateTo("/admindashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(location.state);

  return (
    <>
      <div className="m-10">
        <div className="block md:flex justify-evenly">
          <div className="mb-10 w-full md:w-[700px] md:mr-4">
            <Card1 product={location.state} />
          </div>

          <div className="b5:min-w-[250px]">
            <Card2 product={location.state} />
            <Card3 product={location.state} />
            {!location.state.adminApproved && (
              <div className=" flex mt-10 justify-around">
                <button
                  className="bg-green-500 text-white rounded-lg py-2 px-4 w-24"
                  onClick={handleApprove}
                >
                  Aprrove
                </button>
                <button
                  className="bg-red-500 text-white rounded-lg py-2 px-4 w-24"
                  onClick={handleReject}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
