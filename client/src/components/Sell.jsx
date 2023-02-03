import React, { useState } from "react";
import axios from "axios";

const Sell = () => {
  const handleClick = () => {};
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { brand, title, desc, price, state, city };
    axios
      .post("http://localhost:8000/addProduct", post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      style={{
        color: "black",
        height: "100vh",
      }}
      onSubmit={handleSubmit}
    >
      <section
        style={{
          border: "1px solid black",
          padding: "2rem",
          width: "800px",
          margin: "0 auto",
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            display: "flex",
            flexDirection: "column",
            width: "450px",
          }}
        >
          <label htmlFor="category" style={{ fontSize: "2rem" }}>
            Enter Your Product Category
          </label>
          <button value={"choose"}>choose</button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "450px",
          }}
        >
          {/* Brand part */}
          <input
            type="text"
            placeholder="Brand"
            style={{ width: "100%" }}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          {/* Title part */}
          <div>
            <input
              type="text"
              placeholder="Ad title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          {/* Description part */}
          <div>
            <textarea
              id=""
              rows={3}
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              style={{ width: "100%" }}
            ></textarea>
          </div>
          {/* Price part */}
          <div>
            <input
              type="number"
              placeholder="Price"
              style={{ width: "100%" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Photos part */}
          <div>
            <span>upload photos</span>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <input
                type="checkbox"
                style={{ width: "1.5rem", marginRight: 10 }}
              />
              <input type="file" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <input
                type="checkbox"
                style={{ width: "1.5rem", marginRight: 10 }}
              />
              <input type="file" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <input
                type="checkbox"
                style={{ width: "1.5rem", marginRight: 10 }}
              />
              <input type="file" />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="State"
              style={{ width: "100%" }}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              style={{ width: "100%" }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <input type="text" placeholder="Name" style={{ width: "100%" }} />
          </div>
          <button type="submit" style={{ width: "450px" }}>
            Post Now
          </button>
        </div>
      </section>
    </form>
  );
};

export default Sell;
