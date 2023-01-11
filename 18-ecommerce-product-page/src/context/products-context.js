import React, { useReducer, useContext, useEffect, useState } from "react";
import reducer from "../Components/reducer/products-reducer";

const ProductsContext = React.createContext();

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (title) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: title });
  };

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL_PRICE" });
  }, [state.cart]);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, showCart, addToCart, removeFromCart, toggleCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsContextProvider;
