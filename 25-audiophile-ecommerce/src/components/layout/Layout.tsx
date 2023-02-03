import React, { FC } from "react";
import Footer from "./footer/Footer";
import LayoutWrapper from "./Layout.wrapper";
import Navbar from "./navbar/Navbar";
import Outro from "./outro/Outro";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      <Outro />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
