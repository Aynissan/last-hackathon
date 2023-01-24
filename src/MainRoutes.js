import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PayVisa from "./Components/Cart/PayVisa";
import Home from "./Components/Home/Home";
import OneProd from "./Components/OneProd/OneProd";
import AddProd from "./Components/Product/AddProd";
import ProductDetails from "./Components/Product/ProductDetails";
import ProductList from "./Components/ProductList/ProductList";
import Category from "./Components/Category/Category";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payvisa" element={<PayVisa />} />
      <Route path="/prodDet/:id" element={<ProductDetails />} />
      <Route path="/prodList" element={<ProductList />} />
      <Route path="/card" element={<OneProd />} />
      <Route path="/oneProd" element={<OneProd />} />

      <Route path="/adminpage" element={<AddProd />} />
      <Route path="/categ" element={<Category />} />
    </Routes>
  );
};

export default MainRoutes;
