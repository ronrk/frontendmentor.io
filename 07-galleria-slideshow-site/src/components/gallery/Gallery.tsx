import React, { FC } from "react";
import { IItemShort } from "../../types/IItemShort";
import GalleryItem from "./GalleryItem";
import Wrapper from "./Gallery.styled";

interface IProps {
  galleryItems: IItemShort[];
}

const Gallery: FC<IProps> = ({ galleryItems }) => {
  return (
    <Wrapper>
      {galleryItems.map((item, idx) => (
        <GalleryItem key={item.slug} galleryItem={item} idx={idx} />
      ))}
    </Wrapper>
  );
};

export default Gallery;
