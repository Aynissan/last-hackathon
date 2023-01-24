import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import { API_CATEGORY, API_PRODUCTS } from "../../helpers";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  oneProduct: {},
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        //   pages: Math.ceil(action.payload.count / 5),
      };
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_PRODUCTS}`, config);
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function addProducts(newProd) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API_PRODUCTS}`, newProd, config);
      console.log(res.data);
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteProd() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const autho = `Bearer ${token.acces}`;
      const config = {
        headers: {
          autho,
        },
      };
      const res = await axios.delete(`{$API_PRODCUCTS}/{$id}/`, config);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  let values = {
    products: state.products,
    getProducts,
    addProducts,
    deleteProd,

    pages: state.pages,
    categories: state.categories,
    // error,

    // getCategories,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
