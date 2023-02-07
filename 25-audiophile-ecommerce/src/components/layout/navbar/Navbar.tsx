import Link from "next/link";
import React from "react";
import { useAppContext } from "../../../context/appContext";
import { navLinks } from "../../../utils/utils";
import CartMenu from "../../shared/CartMenu/CartMenu";
import { IconCart, IconHam, Logo } from "../../ui/icons";
import MobileMenu from "../mobile-menu/MobileMenu";
import NavbarWrapper from "./Navbar.wrapper";

const Navbar = () => {
  const { openCart, closeCart, isCartOpen, isMenuOpen, toggleMenu } =
    useAppContext();
  return (
    <NavbarWrapper className="bg-black">
      <div className="container flex">
        <button
          className="btn--mobileMenu text-white fs-600 fw-b"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : <IconHam />}
        </button>
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
      {isMenuOpen && <MobileMenu />}
    </NavbarWrapper>
  );
};

export default Navbar;
