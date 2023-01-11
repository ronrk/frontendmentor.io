import React, { useEffect, useState } from "react";
import Wrapper from "./ProductGallerySection.styled";

import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
import imgSmall1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgSmall2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgSmall3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgSmall4 from "../../assets/images/image-product-4-thumbnail.jpg";

import { ReactComponent as IconNext } from "../../assets/images/icon-next.svg";
import { ReactComponent as IconPrev } from "../../assets/images/icon-previous.svg";

const ProductGallerySection = ({ toggleGallery, currentActive }) => {
  const [activeImg, setActiveImg] = useState(currentActive || 0);
  const productImages = [img1, img2, img3, img4];

  const currentImg = productImages[activeImg];

  useEffect(() => {
    if (currentActive || currentActive === 0) {
      setActiveImg(currentActive);
    }
  }, [currentActive]);

  const activeImgHandler = (e) => {
    console.log(e.target.id);
    const { id } = e.target;
    setActiveImg(Number(id));
  };

  let productSmallImages = [imgSmall1, imgSmall2, imgSmall3, imgSmall4].map(
    (item, idx) => {
      return (
        <img
          className={idx === activeImg ? "gallery__img active" : "gallery__img"}
          alt={`gallery${idx}`}
          src={item}
          key={idx}
          onClick={activeImgHandler}
          id={idx}
        />
      );
    }
  );

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
    <Wrapper>
      <button className="btn btn-next" onClick={inc}>
        <IconNext />
      </button>
      <img
        src={currentImg}
        alt="product img"
        className="current-img"
        onClick={toggleGallery}
      />
      <button className="btn btn-prev" onClick={dec}>
        <IconPrev />
      </button>
      <div className="product-images__gallery">{productSmallImages}</div>
    </Wrapper>
  );
};

export default ProductGallerySection;
