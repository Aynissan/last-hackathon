import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
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
      const res = await axios(
        `${API_PRODUCTS}${window.location.search}`,
        config
      );

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
      navigate("/prodList");
    } catch (e) {
      console.log(e);
    }
  }

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    console.log(search);
    console.log(url);
    navigate(url);
  };

  let values = {
    products: state.products,
    pages: state.pages,
    categories: state.categories,
    // error,

    // getCategories,
    addProducts,
    getProducts,
    fetchByParams,
    // toggleLike,
    // deleteProduct,
  };

  //   function deleteProd () {

  //   }

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
