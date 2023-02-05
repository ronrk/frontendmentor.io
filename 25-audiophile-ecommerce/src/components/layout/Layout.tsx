import React, { FC } from "react";
import Footer from "./footer/Footer";
import LayoutWrapper from "./Layout.wrapper";
import Navbar from "./navbar/Navbar";
import Outro from "./outro/Outro";
import { useRouter } from "next/router";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const router = useRouter();

  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      {router.pathname !== "/checkout" && <Outro />}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
