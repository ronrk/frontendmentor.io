import React, { FC } from "react";
import Navbar from "./Navbar";
import Wrapper from "./Layout.styled";
import Image from "next/image";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
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
      <Navbar />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
