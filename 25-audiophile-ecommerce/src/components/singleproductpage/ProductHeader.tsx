import Image from "next/image";
import React, { FC, useState } from "react";
import { useAppContext } from "../../context/appContext";
import Button from "../ui/Button";

import ProductHeaderWrapper from "./ProductsHeader.wrapper";

interface IProps {
  name: string;
  description: string;
  price: string;
  categoryImage: string;
  slug: string;
}

const ProductHeader: FC<IProps> = ({
  name,
  description,
  price,
  categoryImage,
  slug,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useAppContext();
  return (
    <ProductHeaderWrapper className="flex">
      <div className="image__wrapper">
        <Image src={categoryImage} alt={name} fill />
      </div>
      <div className="content flow">
        {<legend className="text-overline text-primary">new product</legend>}
        <h1 className="heading-2 text-black">{name}</h1>
        <p className="text-body text-black-light">{description}</p>
        <h5 className="heading-6 text-black">
          ${Number(price).toLocaleString()}
        </h5>

        <div className="actions flex">
          <div className="quantity-actions bg-gray flex">
            <button
              className="text-black-light fs-400"
              onClick={() =>
                setQuantity((prev) => {
                  if (prev <= 1) return 1;
                  return prev - 1;
                })
              }
            >
              -
            </button>
            <p className="heading-6 text-black">{quantity}</p>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <Button
            onClick={() => {
              const cartItem = {
                name,
                slug,
                price: Number(price),
                categoryImage,
              };
              addItemToCart(cartItem, quantity);
              setQuantity(1);
            }}
            color="primary"
          >
            add to cart
          </Button>
        </div>
      </div>
    </ProductHeaderWrapper>
  );
};

export default ProductHeader;
