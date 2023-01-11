import React, { useState } from "react";
import Wrapper from "./LightboxGallery.styled";

import ProductGallerySection from "../ProductGallerySection/ProductGallerySection";

import { ReactComponent as IconNext } from "../../assets/images/icon-next.svg";
import { ReactComponent as IconPrev } from "../../assets/images/icon-previous.svg";
import { ReactComponent as IconClose } from "../../assets/images/icon-close.svg";

const LightboxGallery = ({ showGallery, toggleGallery }) => {
  const [activeImg, setActiveImg] = useState(0);

  const inc = () => {
    setActiveImg((prev) => {
      if (prev === 3) return 0;
      return prev + 1;
    });
  };

  const dec = () => {
    setActiveImg((prev) => {
      if (prev === 0) return 3;
      return prev - 1;
    });
  };

  return (
    <Wrapper className={showGallery ? "show" : null}>
      <button className="btn btn-close" onClick={toggleGallery}>
        <IconClose />
      </button>
      <div className="gallery-container">
        <button className="btn btn-next" onClick={inc}>
          <IconNext />
        </button>
        <ProductGallerySection currentActive={activeImg} />
        <button className="btn btn-prev" onClick={dec}>
          <IconPrev />
        </button>
      </div>
    </Wrapper>
  );
};

export default LightboxGallery;
