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

  return <div></div>;
};

export default ProductContextProvider;
