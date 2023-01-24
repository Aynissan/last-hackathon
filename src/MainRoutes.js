import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PayVisa from "./Components/Cart/PayVisa";
import Home from "./Components/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";

import OneProd from "./Components/OneProd/OneProd";
import AddProd from "./Components/Product/AddProd";
import ProductDetails from "./Components/Product/ProductDetails";
import ProdList from "./Components/ProductList/ProdList";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/navbar" element={<Navbar />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payvisa" element={<PayVisa />} />
      <Route path="/prodDet" element={<ProductDetails />} />
      <Route path="/prodList" element={<ProdList />} />
      <Route path="/card" element={<OneProd />} />
      <Route path="/oneProd" element={<OneProd />} />
      <Route path="/adminpage" element={<AddProd />} />
    </Routes>
  );
};

export default MainRoutes;
