import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context";
import axios from "axios";
import Card from "./Card";

const Wishlist = () => {
  const { user } = useContext(UserContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/getallwishlist/${user.userId}`)
      .then((res) => {
        if (res.data.message === "success") {
          setWishlist(res.data.products.wishlist);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [wishlist]);

  // console.log(wishlist);

  return (
    <>
      {/* <div>wishlist is this </div> */}
      {wishlist.length !== 0 ? (
        <>
          <section className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
              {wishlist &&
                wishlist.map((product, index) => {
                  return <Card key={index} product={product} />;
                })}
            </div>
          </section>
        </>
      ) : (
        <>
          <div>Wishlist is empty</div>
        </>
      )}
    </>
  );
};

export default Wishlist;
