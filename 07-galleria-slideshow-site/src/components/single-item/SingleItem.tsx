import React, { FC } from "react";
import { IItemDetail } from "../../types/IItemDetail";
import ItemActions from "./ItemActions";
import ItemBody from "./ItemBody";
import ItemHeader from "./ItemHeader";
import ItemImage from "./ItemImage";

const SingleItem: FC<{ galleryItem: IItemDetail }> = ({ galleryItem }) => {
  const { image, name, author, authorImg, description, year, src } =
    galleryItem;
  return (
    <article>
      <ItemImage image={image} name={name} />
      <ItemHeader name={name} author={author} authorImg={authorImg} />
      <ItemBody description={description} year={year} src={src} />
      <ItemActions name={name} author={author} />
    </article>
  );
};

export default SingleItem;
