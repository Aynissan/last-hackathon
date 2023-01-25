import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../Contexts/ProductContext";
import OneProd from "../OneProd/OneProd";
import "./ProductList.css";
import { Pagination } from "@mui/material";
import pic1 from "../Auth/assets/Ellipse 8.jpg";
import pic3 from "../Auth/assets/Saly-38.svg";

const ProductList = () => {
  const { products, getProducts } = useContext(productContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams(1);
  const pages = Math.ceil(products.length / 3);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  function currentData() {
    let begin = (currentPage - 1) * 3;
    let end = begin + 3;
    return products.slice(begin, end);
  }
  return (
    <div backgroung-image={pic1} className="content">
      <div backgroung-image={pic3} className="content">
        <img src={pic1} className="img1" alt="" />
        <img src={pic3} className="img2" alt="" />
        <div>
          <h1 className="title_products">Our Products</h1>
          <div className="cont_prod">
            <div className="product_div">
              {currentData().map((item) => (
                <OneProd key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="div_pagination">
            <Pagination
              count={pages}
              variant="outlined"
              color="primary"
              page={currentPage}
              onChange={(e, p) => setCurrentPage(p)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
