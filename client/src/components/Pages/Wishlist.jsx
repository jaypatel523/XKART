import React, { useContext , useEffect } from "react";
import { UserContext } from "../../Context";
import axios from "axios";


const Wishlist = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`/api/getallwishlist/${user.userId}`)
      .then((res) => {
        console.log(res.data.all);
        console.log(res.data.msg);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>Wishlist page comming soon</div>
    </>
  );
};

export default Wishlist;
