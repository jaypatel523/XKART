import React from "react";

const Sell = () => {
  return (
    <div
      style={{
        color: "black",
        height: "100vh",
      }}
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
          <input type="text" placeholder="Brand" style={{ width: "100%" }} />
          {/* Title part */}
          <div>
            <input
              type="text"
              placeholder="Ad title"
              style={{ width: "100%" }}
            />
          </div>
          {/* Description part */}
          <div>
            <textarea
              id=""
              rows={3}
              placeholder="Description"
              style={{ width: "100%" }}
            ></textarea>
          </div>
          {/* Price part */}
          <div>
            <input
              type="number"
              placeholder="Price"
              style={{ width: "100%" }}
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
            <input type="text" placeholder="State" style={{ width: "100%" }} />
          </div>
          <div>
            <input type="text" placeholder="City" style={{ width: "100%" }} />
          </div>
          <div>
            <input type="text" placeholder="Name" style={{ width: "100%" }} />
          </div>
        </div>
        <button style={{ width: "450px" }}>Post Now</button>
      </section>
    </div>
  );
};

export default Sell;
