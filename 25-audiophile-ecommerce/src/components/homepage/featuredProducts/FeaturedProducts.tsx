import React, { FC } from "react";
import { ISectionStyle } from "../../../utils/utils";
import FeaturedProductsWrapper from "./FeaturedProducts.wrapper";
import SingleProduct from "./SingleProduct";

interface IProps {
  featuredProducts: {
    name: string;
    slug: string;
    imageSrc: string;
    style: ISectionStyle;
  }[];
}

const FeaturedProducts: FC<IProps> = ({ featuredProducts }) => {
  return (
    <FeaturedProductsWrapper className="flow flow-space--big">
      {featuredProducts.map((product, idx) => (
        <SingleProduct
          name={product.name}
          path={`/products/${product.slug}`}
          key={idx}
          imageSrc={product.imageSrc}
          style={product.style}
        />
      ))}
    </FeaturedProductsWrapper>
  );
};

export default FeaturedProducts;
