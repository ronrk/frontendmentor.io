import React from "react";
import { useProductsContext } from "../../context/products-context";
import Wrapper from "./Navbar.styled";

import logo from "../../assets/images/logo.svg";
import { ReactComponent as IconCart } from "../../assets/images/icon-cart.svg";
import { ReactComponent as IconMenu } from "../../assets/images/icon-menu.svg";
import { ReactComponent as IconClose } from "../../assets/images/icon-close.svg";
import userImg from "../../assets/images/image-avatar.png";

const Navbar = ({ toggleSidebar, showSidebar }) => {
  const { toggleCart, cart } = useProductsContext();
  return (
    <Wrapper>
      <button className="btn btn-Sidebar" onClick={toggleSidebar}>
        {showSidebar ? <IconClose /> : <IconMenu />}
      </button>
      <img src={logo} alt="logo" className="nav__logo" />
      <ul className="nav__list">
        <li>
          <a href="/">Collections</a>
        </li>
        <li>
          <a href="/">Men</a>
        </li>
        <li>
          <a href="/">Women</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <div className="nav__actions">
        <button className="btn btn-cart_box" onClick={toggleCart}>
          {cart.length > 0 ? (
            <span className="cart_number-items">{cart.length}</span>
          ) : null}
          <IconCart />
        </button>
        <button className="btn btn-user_box">
          <img src={userImg} alt="user avatar" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
