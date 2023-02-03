import React, { FC } from "react";
import FeaturedProductsWrapper from "./FeaturedProducts.wrapper";
import SingleProduct from "./SingleProduct";

interface IProps {
  featuredProducts: {
    name: string;
    path: string;
    imageSrc: string;
    style: "primary" | "secondary" | "seperate";
  }[];
}

const FeaturedProducts: FC<IProps> = ({ featuredProducts }) => {
  return (
    <FeaturedProductsWrapper className="flow flow-space--big">
      {featuredProducts.map((product, idx) => (
        <SingleProduct
          name={product.name}
          path={product.path}
          key={idx}
          imageSrc={product.imageSrc}
          style={product.style}
        />
      ))}
    </FeaturedProductsWrapper>
  );
};

export default FeaturedProducts;
