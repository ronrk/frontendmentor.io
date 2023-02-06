import Link from "next/link";
import React from "react";
import { useAppContext } from "../../../context/appContext";
import { navLinks } from "../../../utils/utils";
import CartMenu from "../../shared/CartMenu/CartMenu";
import { IconCart, Logo } from "../../ui/icons";
import NavbarWrapper from "./Navbar.wrapper";

const Navbar = () => {
  const { openCart, closeCart, isCartOpen } = useAppContext();
  return (
    <NavbarWrapper className="bg-black">
      <div className="container flex">
        <button className="btn--mobileMenu text-white">HAM</button>
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

        <button
          className="cart--btn"
          onClick={() => {
            if (isCartOpen) {
              closeCart();
              return;
            }
            openCart();
          }}
        >
          <IconCart />
        </button>
      </div>
      {isCartOpen && <CartMenu />}
    </NavbarWrapper>
  );
};

export default Navbar;
