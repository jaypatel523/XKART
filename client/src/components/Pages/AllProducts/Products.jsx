import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context";
import Card from "./Card";
import ReactLoading from "react-loading";
import { BsSearch } from "react-icons/bs";

const Products = () => {
  const { user } = useContext(UserContext);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [categoryWiseProduct, setCategoryWiseProduct] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/getAllProducts")
      .then((res) => {
        // console.log(res);
        setAllProducts(res.data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(params).length == 0) return;

    setIsLoading(true);
    axios
      .get("/api/getProductCategorywise/" + params.category)
      .then((res) => {
        setCategoryWiseProduct(res.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.category]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    search(event.target.value);
  };

  const search = async (query) => {
    const response = await axios.get(`/api/search?q=${query}`);
    setResults(response.data);
  };

  // console.log(results);

  return (
    <>
      <div className="h-screen bg-gray-50">
        <section className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-4 py-10">
          <div className="mb-5">
            <div className="flex items-center rounded-lg justify-center border border-black">
              <input
                type="text"
                className="w-full p-2 focus:outline-none rounded-lg"
                placeholder="search any product..."
                // value={searchProduct}
                // onChange={(e) => setSearchProduct(e.target.value)}
                value={query}
                onChange={handleInputChange}
              />
              {/* <button className="absolute right-4 p-2 bg-gray-200 border border-black">
                <BsSearch className="w-6 h-6" />
              </button> */}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-6">
            {/* {isSearching ? <>yes</> : <>no</>} */}
            {params?.category ? (
              <>
                {categoryWiseProduct &&
                  categoryWiseProduct.map((product, index) => {
                    if (product.adminApproved === true) {
                      return <Card key={index} product={product} />;
                    }
                  })}
              </>
            ) : (
              <>
                {query.length == 0 ? (
                  <>
                    {allProducts &&
                      allProducts.map((product, index) => {
                        if (product.adminApproved === true) {
                          return <Card key={index} product={product} />;
                        }
                      })}
                  </>
                ) : (
                  <>
                    {results &&
                      results.map((product, index) => {
                        if (product.adminApproved === true) {
                          return <Card key={index} product={product} />;
                        }
                      })}
                  </>
                )}
              </>
            )}
          </div>
        </section>

        {isLoading && (
          <>
            <div className="flex items-center justify-center">
              <ReactLoading type="balls" color="#3B82F6" width="200px" />
            </div>
          </>
        )}

        {!isLoading &&
          allProducts.length == 0 &&
          categoryWiseProduct.length > 0 && (
            <>
              <h1 className="flex justify-center items-center text-4xl text-gray-400">
                No Product Available Right Now
              </h1>
            </>
          )}
      </div>
    </>
  );
};

export default Products;
