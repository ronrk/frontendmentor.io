import Image from "next/image";
import React, { FC } from "react";
import LinkButton from "../ui/LinkButton";
import RelativeProductsWrapper from "./RelativeProducts.wrapper";

interface IProps {
  otherProducts: any[];
}

const RelativeProducts: FC<IProps> = ({ otherProducts }) => {
  return (
    <RelativeProductsWrapper className="flex">
      {otherProducts.map((product, idx) => (
        <div key={idx} className="product flex-col">
          <div className="image__wrapper">
            <Image src={product.image.desktop} alt={""} fill />
          </div>
          <h3 className="heading-4">{product.name}</h3>
          <LinkButton color="primary" path={`/products/${product.slug}`}>
            see product
          </LinkButton>
        </div>
      ))}
    </RelativeProductsWrapper>
  );
};

export default RelativeProducts;
