import React, { createContext, useReducer } from "react";

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
        products: action.payload.results,
        //   pages: Math.ceil(action.payload.count / 5),
      };
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const autho = `Bearer ${token.acces}`;
      const config = {
        headers: {
          autho,
        },
      };
      const res = await axios(
        `${API_PRODUCTS}/${window.location.search}`,
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

  async function addProduct(newProd) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const autho = `Bearer ${token.acces}`;
      const config = {
        headers: {
          autho,
        },
      };
      const res = await axios.post(`${API_PRODUCTS}/`, newProd, config);
      console.log(res.data);
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  }

  //   function deleteProd () {

  //   }

  return <div></div>;
};

export default ProductContextProvider;
