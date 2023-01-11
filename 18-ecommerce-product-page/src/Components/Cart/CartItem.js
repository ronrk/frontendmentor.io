import React from "react";
import { useProductsContext } from "../../context/products-context";
import Wrapper from "./CartItem.styled";

import { ReactComponent as IconRemove } from "../../assets/images/icon-delete.svg";

const CartItem = ({ title, finalPrice, totalItems, img }) => {
  const { removeFromCart } = useProductsContext();
  return (
    <Wrapper>
      <img src={img} alt="" className="product_img" />
      <span className="title">{title}</span>
      <span className="price">
        ${finalPrice.toFixed(2)} X {totalItems.toFixed(2)}{" "}
        <span className="total-price">
          ${(totalItems * finalPrice).toFixed(2)}
        </span>
      </span>
      <button className="btn btn-remove" onClick={() => removeFromCart(title)}>
        <IconRemove />
      </button>
    </Wrapper>
  );
};

export default CartItem;
