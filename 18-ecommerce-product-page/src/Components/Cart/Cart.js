import React from "react";

import { useProductsContext } from "../../context/products-context";
import CartItem from "./CartItem";
import Wrapper from "./Cart.styled";

const Cart = () => {
  const { cart, showCart } = useProductsContext();
  console.log(cart);
  if (cart.length === 0) {
    return (
      <Wrapper className={showCart ? "show" : null}>
        <h4 className="cart__title">Cart</h4>
        <span className="empty">Your cart is empty.</span>
      </Wrapper>
    );
  }
  return (
    <Wrapper className={showCart ? "show" : null}>
      <h4 className="cart__title">Cart</h4>
      {cart.map((item, idx) => {
        return (
          <CartItem {...item} key={idx}>
            item
          </CartItem>
        );
      })}
      <button className="btn btn-orange">Checkout</button>
    </Wrapper>
  );
};

export default Cart;
