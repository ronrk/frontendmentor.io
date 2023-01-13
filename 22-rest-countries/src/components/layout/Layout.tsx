import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectValue } from "../../store/slices/countriesSlice";
import Wrapper from "./Layout.styled";
import Navbar from "./Navbar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { darkTheme } = useSelector(selectValue);

  return (
    <Wrapper className={darkTheme ? "app dark" : "app"}>
      <Navbar />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
