import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PayVisa from "./Components/Cart/PayVisa";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payvisa" element={<PayVisa />} />
      <Route path="/prod" element={<Product />} />
    </Routes>
  );
};

export default MainRoutes;
