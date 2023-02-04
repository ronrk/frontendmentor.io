import Image from "next/image";
import React, { FC } from "react";
import LinkButton from "../ui/LinkButton";
import SingleProductWrapper from "./SingleProduct.wrapper";

interface IProps {
  imageSrc: string;
  name: string;
  description: string;
  slug: string;
  category: string;
  newProduct: boolean;
}

const SingleProduct: FC<IProps> = ({
  imageSrc,
  name,
  description,
  slug,
  category,
  newProduct,
}) => {
  return (
    <SingleProductWrapper className="flex">
      <div className="image__wrapper">
        <Image src={imageSrc} alt={name} fill />
      </div>
      <div className="content flow">
        {newProduct && (
          <legend className="text-overline text-primary">new product</legend>
        )}
        <h3 className="heading-2 text-black">{name}</h3>
        <p className="text-body text-black-light">{description}</p>
        <LinkButton path={`/products/${slug}`} color="primary">
          see product
        </LinkButton>
      </div>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
