import React, { useContext, useEffect , useState} from "react";
import { UserContext } from "../../Context";
import axios from "axios";

const Term = () => {
  const { user } = useContext(UserContext);
  const [join , setJoin] = useState("");

  useEffect(() => {
    console.log(user);
    axios.get(`/api/getuserdetails/${user.userId}`).then((res)=>{
      setJoin(res.data.user.created)
    });
  }, []);

  return (
    <>
      <div className="">
        <div className="mt-5 text-center text-4xl font-semibold text-whatsapp">
          Welcome!! {user.username}
        </div>
        <div className="md:mt-5">
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-[52.5%] block text-whatsapp md:text-xl font-semibold md:text-right mb-1 md:mb-0 pr-4">
              Email :
            </div>
            <div className="md:w-2/3 md:pl-8 ">
              <input
                className="bg-white  border-2 border-gray-200 rounded-xl w-auto text-lg py-2 px-4 text-whatsapp"
                id="inline-full-name"
                type="text"
                value={user.email}
                disabled
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-[58%] block text-whatsapp md:text-xl font-semibold md:text-end mb-1 md:mb-0 pr-4">
              Username :
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white  border-2 border-gray-200 rounded-xl w-auto text-lg py-2 px-4 text-whatsapp"
                id="inline-full-name"
                type="text"
                value={user.username}
                disabled
              />
            </div>
          </div>
          <div className="md:w-[51.5%] block  text-whatsapp md:text-base font-semibold md:text-end mb-1 md:mb-0 pr-4">
            Joined since {join.substring(0,10)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Term;
