import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Wrapper from "./styled/Layout.styled";

const Layout = () => {
  const location = useLocation();
  let bg;

  if (location.pathname === "/") {
    bg = "home";
  } else {
    bg = location.pathname.slice(1);
  }

  return (
    <Wrapper className={`app ${bg}`}>
      <a href="#main" className="text-white skip-to-content sr-only">
        Skip to content
      </a>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
