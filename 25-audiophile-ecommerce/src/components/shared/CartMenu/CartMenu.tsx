import Image from "next/image";
import React, { useState, useEffect, useRef, FC, LegacyRef } from "react";
import { GoChevronDown } from "react-icons/go";
import { useAppContext } from "../../../context/appContext";
import LinkButton from "../../ui/LinkButton";

// import { IDropdownOption } from "../../types/IDropdown";
import CartMenuWrapper from "./CartMenu.wrapper";
// import Panel from './Panel';

interface IProps {
  /*   onChange: (param: any) => void;
  options: any[];
  value: any; */
}

const CartMenu: FC<IProps> = ({}) => {
  const {
    isCartOpen,
    closeCart,
    cart,
    totalPrice,
    removeItemFromCart,
    addItemToCart,
    clearCart,
  } = useAppContext();
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(event: any) {
      if (!divEl.current) {
        return;
      }
      if (event.target === null) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        closeCart();
      }
    }

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  let content;

  if (cart.length === 0) {
    content = <p>Empty Cart</p>;
  }

  if (cart.length > 0) {
    content = (
      <ul className="cart__list">
        {cart.map((cartItem) => (
          <li key={cartItem?.slug}>
            <div className="cart__item">
              <div className="image__wrapper">
                <Image
                  src={cartItem?.categoryImage}
                  alt={cartItem?.name}
                  fill
                />
              </div>
              <div className="item-info">
                <h3 className="fs-200">{cartItem?.name}</h3>
                <p className="text-body">${cartItem?.price.toLocaleString()}</p>
              </div>
              <div className="item-actions flex text-body bg-gray">
                <button onClick={() => removeItemFromCart(cartItem)}>-</button>
                <p>{cartItem?.quantity}</p>
                <button onClick={() => addItemToCart(cartItem, 1)}>+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <CartMenuWrapper className="text-black">
      <div className="container">
        <div className="cart bg-white flex-col flow" ref={divEl}>
          <div className="cart__header flex">
            <h4 className="heading-5">cart ({cart.length})</h4>
            <button className="text-body text-black-light" onClick={clearCart}>
              Remove all
            </button>
          </div>
          {content}

          <div className="cart__price flex">
            <h4 className="heading-6 text-black-light">total</h4>
            <p className="heading-5">${totalPrice.toLocaleString()}</p>
          </div>
          {cart.length > 0 && (
            <LinkButton
              path={"/checkout"}
              color={"primary"}
              onClick={() => closeCart()}
            >
              checkout
            </LinkButton>
          )}
        </div>
      </div>
    </CartMenuWrapper>
  );
};

export default CartMenu;
