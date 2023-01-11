import React from "react";
import { ProductGallerySection, ProductInfoSection } from "../Components";

import Wrapper from "./SingleProductPage.styled";

const SingleProductPage = ({ toggleGallery }) => {
  return (
    <Wrapper>
      <ProductGallerySection toggleGallery={toggleGallery} />
      <ProductInfoSection />
    </Wrapper>
  );
};

export default SingleProductPage;
