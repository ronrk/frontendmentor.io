import React, { useContext, useEffect } from "react";
import axios from "axios";

const DataContext = React.createContext();

const initialState = {};

const DataContextProvider = ({ children }) => {
  useEffect(() => {}, []);

  const getData = async () => {};
  useEffect(() => {
    getData();
  });

  return <DataContext.Provider value={""}>{children}</DataContext.Provider>;
};

export default DataContextProvider;

export const useDataContext = () => useContext(DataContext);
