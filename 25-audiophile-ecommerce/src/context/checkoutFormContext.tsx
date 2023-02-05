import React, {
  FC,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const initialState = {};

const CheckoutContext = React.createContext(initialState);

const CheckoutContextProvider = () => {
  const formContextValue = {};

  return (
    <CheckoutContext.Provider
      value={formContextValue}
    ></CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
