import React, { useState } from "react";

import { useProductsContext } from "../../context/products-context";

import Wrapper from "./ProductInfoSection.styled";

import { ReactComponent as IconMinus } from "../../assets/images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../../assets/images/icon-plus.svg";
import { ReactComponent as IconCart } from "../../assets/images/icon-cart.svg";

import imgProduct from "../../assets/images/image-product-1-thumbnail.jpg";

const ProductInfoSection = () => {
  const DUMMY_PRODUCT = {
    _price: 250,
    finalPrice: 125,
    discountPer: 50,
    title: "Fall Limited Edition Sneakers",
    img: imgProduct,
  };
  const { _price, finalPrice, discountPer, title } = DUMMY_PRODUCT;

  const { addToCart } = useProductsContext();

  const [total, setTotal] = useState(0);

  const inc = () => {
    setTotal((prev) => prev + 1);
  };
  const dec = () => {
    if (total <= 0) {
      return;
    }
    setTotal((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <h2 className="heading-2">Sneaker Company</h2>
      <h1 className="heading-1">{title}</h1>
      <p className="product-info__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-info__price">
        <span className="price__final">${finalPrice.toFixed(2)}</span>
        <span className="price__discount">{discountPer}%</span>
        <span className="price__original">${_price.toFixed(2)}</span>
      </div>

      <div className="product-info__actions">
        <div className="counter">
          <button className="btn btn-counter btn-minus" onClick={dec}>
            <IconMinus />
          </button>
          <span className="count">{total}</span>
          <button className="btn btn-counter btn-plus" onClick={inc}>
            <IconPlus />
          </button>
        </div>
        <button
          className="btn btn-orange btn-addToCart"
          onClick={() => addToCart({ DUMMY_PRODUCT, total })}
        >
          <IconCart /> <span>Add to cart</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default ProductInfoSection;
