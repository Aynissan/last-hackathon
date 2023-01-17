import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
<<<<<<< HEAD
import Home from "./Components/Home/Home";
=======
import PayVisa from "./Components/Cart/PayVisa";
import Home from "./Components/Home";
>>>>>>> e024a1079826f5f635c131da0197c5ce8b3abaa0

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payvisa" element={<PayVisa />} />
    </Routes>
  );
};

export default MainRoutes;
