import React, { useContext, useEffect } from "react";
import { productContext } from "../Contexts/ProductContext";

const ProdList = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return <div></div>;
};

export default ProdList;
