import Image from "next/image";
import React from "react";
import { useAppContext } from "../../../context/appContext";
import LinkButton from "../../ui/LinkButton";
import CheckoutModalWrapper from "./CheckoutModal.wrapper";

const CheckoutModal = () => {
  const { cart, totalPrice, toggleCheckoutModal } = useAppContext();

  return (
    <CheckoutModalWrapper>
      <div className="modal flow bg-white">
        <div className="image__wrapper">
          <Image
            src={"/assets/checkout/icon-order-confirmation.svg"}
            alt={"checkout confirm"}
            fill
          />
        </div>
        <h3 className="heading-3">THANK YOU FOR YOUR ORDER</h3>
        <p className="text-body text-black-light">
          You will receive an email confirmation shortly.
        </p>

        <div className="cart flex">
          <ul className="item-list">
            {cart.map((cartItem) => (
              <li key={cartItem.slug}>
                <div className="cart__item">
                  <div className="image__wrapper">
                    <Image
                      src={cartItem.categoryImage}
                      alt={cartItem.name}
                      fill
                    />
                  </div>
                  <div className="item-info">
                    <h3>{cartItem.name}</h3>
                    <p>{Number(cartItem.price.toFixed(2)).toLocaleString()}</p>
                  </div>
                  <p className="quantity">X{cartItem.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__totals bg-black text-white flow flow-space--small">
            <h5 className="fs-200 fw-l">CART TOTAL</h5>
            <h4 className="heading-5">
              ${Number(totalPrice.toFixed(2)).toLocaleString()}
            </h4>
          </div>
        </div>
        <LinkButton path={"/"} color={"primary"} onClick={toggleCheckoutModal}>
          back to home
        </LinkButton>
      </div>
    </CheckoutModalWrapper>
  );
};

export default CheckoutModal;
