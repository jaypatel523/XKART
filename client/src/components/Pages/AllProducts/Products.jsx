import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../../Context";
import Card from "./Card";
import ReactLoading from "react-loading";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { Pagination } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Products = () => {
  const { user } = useContext(UserContext);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [categoryWiseProduct, setCategoryWiseProduct] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [sortType, setSortType] = useState("");
  const [defaultProducts, setDefaultProducts] = useState(null);

  const handleChange = (event) => {
    setSortType(event.target.value);
  };

  useEffect(() => {
    if (sortType === "a-z") {
      const Ascending = [...allProducts].sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      setAllProducts(Ascending);
    } else if (sortType === "z-a") {
      const Descending = [...allProducts].sort((a, b) =>
        a.title > b.title ? -1 : 1
      );
      setAllProducts(Descending);
    } else if (sortType === "none") {
      setAllProducts(defaultProducts);
    }
  }, [sortType]);

  const location = useLocation();

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("/api/getAllProducts")
  //     .then((res) => {
  //       // console.log(res);
  //       setAllProducts(res.data.products);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "/api/getPaginatedProducts/query?pageNumber=" + pageIndex + "&limit=8"
      )
      .then((res) => {
        console.log(res);
        setTotalPage(res.data.totalPages);
        setDefaultProducts(res.data.paginatedProducts);
        setAllProducts(res.data.paginatedProducts);
        setIsLoading(false);
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

  const handlePageChage = (e, page) => {
    setIsLoading(true);
    setPageIndex(page);
    axios
      .get(
        "/api/getPaginatedProducts/query?pageNumber=" + (page - 1) + "&limit=8"
      )
      .then((res) => {
        console.log(res);
        setDefaultProducts(res.data.paginatedProducts);
        setAllProducts(res.data.paginatedProducts);
        setIsLoading(false);
      });
  };

  console.log(params);

  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-gray-100">
          <section className="max-w-[86rem] bg-gray-100 mx-10 px-4 sm:px-6 lg:px-4 py-10">
            <div className="flex mb-5 justify-between items-center">
              <div>
                <h1 className="text-gray-500 text-2xl">Filters</h1>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label"> Sort </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={sortType}
                    label="Sort"
                    onChange={handleChange}
                  >
                    <MenuItem value="none">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"a-z"}>A-Z</MenuItem>
                    <MenuItem value={"z-a"}>Z-A</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
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
            {!isLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 b11:grid-cols-4 gap-10">
                {params?.category ? (
                  <>
                    {categoryWiseProduct &&
                      categoryWiseProduct.map((product, index) => {
                        return <Card key={index} product={product} />;
                      })}
                  </>
                ) : (
                  <>
                    {query.length == 0 ? (
                      <>
                        {allProducts &&
                          allProducts.map((product, index) => {
                            return <Card key={index} product={product} />;
                          })}
                      </>
                    ) : (
                      <>
                        {results &&
                          results.map((product, index) => {
                            return <Card key={index} product={product} />;
                          })}
                      </>
                    )}
                  </>
                )}
              </div>
            )}
            {isLoading && (
              <>
                <div className="flex my-20 justify-center h-96">
                  <ReactLoading type="spokes" color="#164e63" width="200px" />
                </div>
              </>
            )}

            {!params?.category && (
              <div className="flex justify-center mt-10">
                <Pagination
                  count={totalPage}
                  variant="outlined"
                  shape="rounded"
                  onChange={handlePageChage}
                />
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
