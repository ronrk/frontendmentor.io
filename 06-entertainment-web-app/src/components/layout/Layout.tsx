import React, { FC } from "react";

import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

import Wrapper from "./Layout.styled";

interface IProps {
  children: JSX.Element;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Wrapper className="bg-black">
      <Sidebar />
      <Searchbar />
      <main className="main">{children}</main>
    </Wrapper>
  );
};

export default Layout;
