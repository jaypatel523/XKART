import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context";
import axios from "axios";
import Card from "../Pages/AllProducts/Card";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [term, setTerm] = useState("");
  const [product, setProduct] = useState([]);

  const handleClick = (e) => {
    axios
      .get(`/api/getProductUser/${user.userId}`)
      .then((res) => {
        console.log(res.data.products);
        setProduct(res.data.products);
      })
      .catch((err) => console.log(err));
    if (e.target.name === "pending") {
      setTerm("pending");
    }
    if (e.target.name === "active") {
      setTerm("active");
    }
    if (e.target.name === "reject") {
      setTerm("reject");
    }
  };

  useEffect(() => {
    console.log(user);
  }, [product]);

  return (
    <>
      {user.userId ? (
        <>
          <div className=" mt-5 text-center text-3xl">
            Welcome {user.username}
          </div>
          <div>
            <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
              <div className="border shadow-xl  ">
                <img
                  name="pending"
                  src="../../../assets/pending.png"
                  alt="pending image"
                  className=" border h-[15.75rem] m-auto hover:cursor-pointer"
                  onClick={(e) => handleClick(e)}
                />
                <div className="text-center">View your pending add </div>
              </div>
              <div className="border shadow-xl  ">
                <img
                  name="active"
                  src="../../../assets/active.png"
                  alt="active image"
                  className=" border h-[15.75rem] m-auto hover:cursor-pointer"
                  onClick={(e) => handleClick(e)}
                />
                <div className="text-center">View your active add</div>
              </div>
              <div className="border shadow-xl  ">
                <img
                  name="reject"
                  src="../../../assets/reject.png"
                  alt="reject image"
                  className=" border h-[15.75rem] m-auto hover:cursor-pointer"
                  onClick={(e) => handleClick(e)}
                />
                <div className="text-center">View your rejected add</div>
              </div>
            </div>
          </div>
          <div className=" mt-10 ">
            {(term === "pending" && (
              <div className="text-center text-3xl">
                {" "}
                Your Pending adds are{" "}
              </div>
            )) ||
              (term === "active" && (
                <div className="text-center text-3xl">
                  {" "}
                  Your Active adds are{" "}
                </div>
              )) ||
              (term === "reject" && (
                <div className="text-center text-3xl">
                  {" "}
                  Your Rejected adds are{" "}
                </div>
              ))}
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
            {(term === "pending" &&
              product &&
              product.map((p, index) => {
                if (p.isPending === true) {
                  return <Card key={index} product={p} />;
                }
              })) ||
              (term === "active" &&
                product &&
                product.map((p, index) => {
                  if (p.isPending === false && p.adminApproved === true) {
                    return <Card key={index} product={p} />;
                  }
                })) ||
              (term === "reject" &&
                product &&
                product.map((p, index) => {
                  if (p.isPending === false && p.adminRejected === true) {
                    return <Card key={index} product={p} />;
                  }
                }))}
          </div>
        </>
      ) : (
        <div>Please login</div>
      )}
    </>
  );
};

export default Profile;