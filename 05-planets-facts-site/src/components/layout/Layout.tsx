import React, { FC, useState } from "react";
import Navbar from "./Navbar";
import Wrapper from "./Layout.styled";
import Image from "next/image";
import MenuNav from "./MenuNav";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <div className="bg">
        <Image
          src={"/assets/background-stars.svg"}
          alt={"stars background"}
          fill
          priority={true}
        />
      </div>
      <Navbar handleMenu={toggleMenu} />
      {isMenuOpen ? <MenuNav handleMenu={toggleMenu} /> : null}

      <main className="main">{children}</main>
    </Wrapper>
  );
};

export default Layout;
