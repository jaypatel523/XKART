import React from "react";

const Search = () => {
  return (
    <>
      <div className="py-4 block md:hidden">
        <form className="mx-6 flex items-center justify-center">
          <input
            type="text"
            className="p-2 w-full border border-black rounded-lg  focus:outline-none"
            placeholder="search any product..."
          />
        </form>
      </div>
    </>
  );
};

export default Search;
