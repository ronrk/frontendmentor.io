import Link from "next/link";
import React from "react";
import { navLinks } from "../../../utils/utils";
import { IconCart, Logo } from "../../ui/icons";
import NavbarWrapper from "./Navbar.wrapper";

const Navbar = () => {
  return (
    <NavbarWrapper className="bg-black">
      <div className="container flex">
        <Logo />
        <ul className="flex">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link href={link.path} className="sub-heading text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={"/cart"}>
          <IconCart />
        </Link>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
