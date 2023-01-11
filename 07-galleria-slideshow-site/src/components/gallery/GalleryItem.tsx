import Image from "next/image";
import React, { FC } from "react";
import { IItemShort } from "../../types/IItemShort";
import Wrapper from "./GalleryItem.styled";

interface IProps {
  galleryItem: IItemShort;
  idx: number;
}

const GalleryItem: FC<IProps> = ({ galleryItem, idx }) => {
  return (
    <Wrapper className={`item--${idx}`}>
      <div className={`image-wrapper idx`}>
        <Image
          src={galleryItem.image?.replace(".", "") || ""}
          alt={galleryItem.name}
          fill
        />
      </div>
      <div className="content flow flow-space--small">
        <h2 className="text-heading-2 text-white">{galleryItem.name}</h2>
        <h3 className="text-heading-3 text-white-75">{galleryItem.author}</h3>
      </div>
    </Wrapper>
  );
};

export default GalleryItem;
