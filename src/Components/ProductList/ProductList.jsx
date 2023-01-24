import React, { useContext, useEffect } from "react";
import { productContext } from "../Contexts/ProductContext";
import OneProd from "../OneProd/OneProd";

const ProductList = () => {
  const { products, getProducts } = useContext(productContext);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map((item) => (
        <OneProd key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
