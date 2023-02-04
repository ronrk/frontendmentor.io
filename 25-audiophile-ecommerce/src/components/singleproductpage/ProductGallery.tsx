import Image from "next/image";
import React, { FC } from "react";
import ProductGalleryWrapper from "./ProductGallery.wrapper";

interface IProps {
  gallery: string[];
  name: string;
}

const ProductGallery: FC<IProps> = ({ gallery, name }) => {
  return (
    <ProductGalleryWrapper>
      {gallery.map((img, idx) => (
        <div key={idx} className="image__wrapper">
          <Image src={img} alt={name} fill />
        </div>
      ))}
    </ProductGalleryWrapper>
  );
};

export default ProductGallery;
