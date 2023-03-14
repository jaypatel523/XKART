import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <>
      <section className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Products;
