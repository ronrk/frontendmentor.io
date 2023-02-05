import Image from "next/image";
import React from "react";
import { useAppContext } from "../../context/appContext";
import Button from "../ui/Button";
import CheckoutCartWrapper from "./CheckoutCart.wrapper";

const CheckoutCart = () => {
  const { cart, totalPrice } = useAppContext();
  let vatTotal = (totalPrice / 0.5) * 0.1;
  let shippingPrice = 50;
  return (
    <CheckoutCartWrapper className="bg-white">
      <h3 className="heading-6">sammary</h3>
      <ul className="cart__list">
        {cart.map((cartItem) => (
          <li key={cartItem.slug}>
            <div className="cart__item">
              <div className="image__wrapper">
                <Image src={cartItem.categoryImage} alt={cartItem.name} fill />
              </div>
              <div className="item-info">
                <h5 className="heading-6">{cartItem.name}</h5>
                <p className="text-body text-black-light">
                  ${cartItem.price.toLocaleString()}
                </p>
              </div>
              <p className="quantity text-body text-black-light">
                X{cartItem.quantity}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart__totals">
        <div className="totals-row flex">
          <h4 className="sub-heading text-black-light">total</h4>
          <p className="heading-6 text-black">${totalPrice.toLocaleString()}</p>
        </div>
        <div className="totals-row flex">
          <h4 className="sub-heading text-black-light">shipping</h4>
          <p className="heading-6 text-black">
            ${shippingPrice.toLocaleString()}
          </p>
        </div>
        <div className="totals-row flex">
          <h4 className="sub-heading text-black-light">vat</h4>
          <p className="heading-6 text-black">
            ${vatTotal.toFixed(2).toLocaleString()}
          </p>
        </div>
        <div className="totals-row flex">
          <h4 className="sub-heading text-black-light">grand total</h4>
          <p className="heading-6 text-primary">
            $
            {(totalPrice + shippingPrice + vatTotal)
              .toFixed(2)
              .toLocaleString()}
          </p>
        </div>
      </div>
      <Button
        color={"primary"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        continue & pay
      </Button>
    </CheckoutCartWrapper>
  );
};

export default CheckoutCart;
