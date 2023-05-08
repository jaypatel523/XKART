import React, { useContext, useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../../Context";

const SingleProduct = () => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState("");

  const handleApprove = () => {
    let message = msg.trim();
    if (message.length == 0) {
      toast("Please enter the reason for approving this product", {
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
    // console.log(location.state);
    axios.get("/api/getuserdetails/" + location.state.sellerId).then((res) => {
      // console.log(res);
      if (res.data.success) {
        const data = {
          message,
          product: location.state,
          email: res.data.user.email,
        };
        axios
          .patch("/api/adminApproved", data)
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
      } else {
        toast("Something went wrong", {
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

  const handleReject = () => {
    let message = msg.trim();
    if (message.length == 0) {
      toast("Please enter the reason for approving this product", {
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

    axios.get("/api/getuserdetails/" + location.state.sellerId).then((res) => {
      // console.log(res);
      if (res.data.success) {
        const data = {
          message,
          product: location.state,
          email: res.data.user.email,
        };
        axios
          .patch("/api/adminRejected", data)
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
      } else {
        toast("Something went wrong", {
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

  // console.log(location.state);

  return (
    <>
      <div className="h-screen p-10 bg-gray-100">
        <div className="block md:flex justify-evenly">
          <div className="mb-10 w-full md:w-[700px]">
            <Card1 product={location.state} />
          </div>

          <div className="b5:min-w-[300px]">
            <Card2 product={location.state} />
            <Card3 product={location.state} />
            {user.username === "Admin" && (
              <>
                <div className="text-whatsapp text-3xl text-center">
                  Enter the message
                </div>
                <div className="my-4">
                  <textarea
                    className="p-2 border w-full border-gray-200 hover:border-gray-400 focus:outline-none"
                    cols="3"
                    rows="3"
                    type="text"
                    name="msg"
                    id="msg"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
